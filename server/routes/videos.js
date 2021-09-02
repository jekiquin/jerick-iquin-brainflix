const router = require('express').Router();
const fs = require('fs');

const VIDEO_LIST = './data/videos.json';
const VIDEO_DETAILS = './data/video-details.json';

router.get('/', (_req, res) => {
    try {
        res.status(200).json(readData(VIDEO_LIST)); 
    } catch {
        res.status(500).send('Internal database error')
    }
})

router.get('/:videoId', (req, res) => {
    try {
        const videoId = req.params.videoId;
        const videos = readData(VIDEO_DETAILS);
        const selectedVideo = videos.find(video => video.id === videoId);

        !selectedVideo
        ? res.status(400).json({message: 'No data with that id exists!'})
        : res.status(200).json(selectedVideo);
    } catch {
        res.status(500).send('Internal database error')
    }
})


const readData = (data) => {
    return JSON.parse(fs.readFileSync(data));
}

module.exports = router;