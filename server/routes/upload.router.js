// this router was not used
// i may come back and try to add a file uploader in the future

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
})

module.exports = router;