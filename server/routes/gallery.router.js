const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');

// get pool object from module
const pool = require('../modules/pool');

// PUT Route
router.put('/like/:id', (req, res) => {
    // console.log(req.params);
    const galleryId = req.params.id;
    // for (const galleryItem of galleryItems) {
    //     if (galleryItem.id == galleryId) {
    //         galleryItem.likes += 1;
    //     }
    // }

    const likeCount = req.body.likes;

    const sqlText = `
        UPDATE "images" SET "likes" = $2 WHERE "id" = $1;
    `

    const sqlOptions = [
        galleryId,
        likeCount,
    ]

    pool.query(sqlText, sqlOptions)
        .then(response => {
            res.sendStatus(200);
        })
        .catch(err => {
            console.error('Error updating like count through database:', err);
            res.sendStatus(500);
        })
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {

    const sqlText = `
        SELECT * FROM "images" ORDER BY "id" ASC;
    `

    pool.query(sqlText)
        .then(response => {
            res.send(response.rows);
        })
        .catch(err => {
            console.error('Error with get route from database:', err);
            res.sendStatus(500);
        })
}); // END GET Route

module.exports = router;