const router = require('express').Router();
const fs = require('fs');
const uniqid = require('uniqid');

const VIDEO_DETAILS = './data/video-details.json';

router.get('/', (_req, res) => {
    try {
        res.status(200).json(getList(readData())); 
    } catch {
        res.status(500).send('Internal database error')
    }
})

router.get('/:videoId', (req, res) => {
    try {
        const videoId = req.params.videoId;
        const videos = readData();
        const selectedVideo = videos.find(video => video.id === videoId);

        !selectedVideo
        ? res.status(400).json({message: 'No data with that id exists!'})
        : res.status(200).json(selectedVideo);
    } catch {
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

        const videos = readData();
        videos.push(data);
        writeFile(videos);
        res.status(201).json(data);
    }
    catch (err) {
        console.log(err);
        res.status(500).send('Internal database error');
    }
})


const readData = () => {
    return JSON.parse(fs.readFileSync(VIDEO_DETAILS));
}

const writeFile = (data) => {
    fs.writeFileSync(VIDEO_DETAILS, JSON.stringify(data));
}

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