const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');

// get pool object from module
const pool = require('../modules/pool');

// PUT Route
router.put('/like/:id', (req, res) => {
    // image id from client
    const galleryId = req.params.id;

    // like count from client
    // we should be verifying if this client has already liked this image
    const likeCount = req.body.likes;

    // update image likes
    const sqlText = `
        UPDATE "images" SET "likes" = $2 WHERE "id" = $1;
    `

    const sqlOptions = [
        galleryId,
        likeCount,
    ]

    // query the database
    pool.query(sqlText, sqlOptions)
        .then(response => {
            // send a success status to the client
            res.sendStatus(200);
        })
        .catch(err => {
            // handle errors
            console.error('Error updating like count through database:', err);
            res.sendStatus(500);
        })
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {

    // get all images in order of when they were added to the database
    const sqlText = `
        SELECT * FROM "images" ORDER BY "id" ASC;
    `

    // query the database
    pool.query(sqlText)
        .then(response => {
            // just send the array of data back to the client
            res.send(response.rows);
        })
        .catch(err => {
            // handle errors
            console.error('Error with get route from database:', err);
            res.sendStatus(500);
        })
}); // END GET Route

// POST Route
router.post('/', (req, res) => {
    const sqlText = `
        INSERT INTO "images" ("path", "description", "likes", "image-width", "image-height")
        VALUES
            ($1, $2, 0, $3, $4);
    `

    const { path, description, width, height } = req.body;
    const sqlOptions = [
        path,
        description,
        width,
        height,
    ]

    pool.query(sqlText, sqlOptions)
        .then(response => {
            res.sendStatus(201);
        })
        .catch(err => {
            console.error('Error with post route:', err);
            res.sendStatus(500);
        })
});

router.delete('/:id', (req, res) => {

    const sqlText = `
        DELETE FROM "images" WHERE "id" = $1;
    `

    const sqlOptions = [req.params.id];

    pool.query(sqlText, sqlOptions)
        .then(response => {
            res.sendStatus(200);
        })
        .catch(err => {
            console.error('Error with delete route:', err);
            res.sendStatus(500);
        })
})

module.exports = router;