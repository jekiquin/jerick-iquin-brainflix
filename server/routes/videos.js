const router = require('express').Router();
const uniqid = require('uniqid');
const {readData, writeFile} = require('../utils/fileSync');


const VIDEO_DETAILS = './data/video-details.json';

router.get('/', (_req, res) => {
    try {
        res.status(200).json(getList(readData(VIDEO_DETAILS))); 
    } 
    catch (err) {
        console.log(err);
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
    } 
    catch (err) {
        console.log(err);
        res.status(500).send('Internal database error');
    }
})

router.post('/', (req, res) => {
    try{
        const data = {
            id: uniqid(),
            ...req.body,
            image: 'http://localhost:5002/Profile/Upload-video-preview.jpg',
            views: '0',
            likes: '0',
            duration: '0:08',
            video: 'https://project-2-api.herokuapp.com/stream',
            timestamp: Date.now(),
            comments: []
        }

        const videos = readData(VIDEO_DETAILS);
        videos.push(data);
        writeFile(VIDEO_DETAILS, videos);
        res.status(201).json(data);
    }
    catch (err) {
        console.log(err);
        res.status(500).send('Internal database error');
    }
})




const getList = (fullDetails) => {
   return fullDetails.map(detail => {
       const {id, title, channel, image} = detail;
       return {
           id,
           title,
           channel,
           image
       }
   })
}

module.exports = router;