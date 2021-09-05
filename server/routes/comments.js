const router = require('express').Router();
const fs = require('fs');
const uniqid = require('uniqid');
const {readData, writeFile} = require('../utils/fileSync');



router.post('/:videoId/comments', (req, res) => {
    try{
        const {videoId} = req.params;
        const videoList = readData();
        const selectedVideoIndex = videoList.findIndex(video => video.id === videoId);
        if (selectedVideoIndex === -1) {
            return res.status(400).json({message: `Unable to find index from id ${videoId}`})
        }

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

router.delete('/:videoId/comments/:commentId', (req, res) => {
    try{
        const {videoId, commentId} = req.params;
        const videoList = readData();
        const selectedVideoIndex = videoList.findIndex(video => video.id === videoId);
        if (selectedVideoIndex === -1) {
            return res.status(400).json({message: `Unable to find index from id ${videoId}`})
        }

        const selectedVideo = videoList[selectedVideoIndex]
        const selectedCommentIndex = selectedVideo.comments.findIndex(comment => comment.id === commentId);
        const selectComment = selectedVideo.comments[selectedCommentIndex];
        if (selectedCommentIndex === -1) {
            return res.status(400).json({message: `Unable to find index from id ${commentId}`})
        }

        videoList[selectedVideoIndex].comments.splice(selectedCommentIndex);
        writeFile(videoList);
        res.status(200).json(selectComment);
    }
    catch (err) {
        console.log(err);
        res.status(500).send('Internal database error');
    }
})

module.exports = router;