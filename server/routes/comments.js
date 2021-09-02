const router = require('express').Router();
const fs = require('fs');
const uniqid = require('uniqid');
const {readData, writeFile} = require('../utils/fileSync');



router.post('/:videoId/comments', (req, res) => {
    try{
        const {videoId} = req.params;
        const videoList = readData();
        const selectedVideoIndex = videoList.findIndex(video => video.id === videoId);
        const comment = {
            ...req.body,
            id: uniqid(),
            timestamp: Date.now()
        }
        videoList[selectedVideoIndex].comments.push(comment);
        writeFile(videoList);
        res.status(201).json(comment);
    }
    catch (err) {
        console.log(err);
        res.status(500).send('Internal database error');
    }
 
})

module.exports = router;