const express = require('express');
const app = express();
const cors = require('cors');
const videoRouter = require('./routes/videos');
require('dotenv').config();

const PORT = process.env.PORT || 5002;
const VIDEO_UPLOAD_KEYS = ['title', 'description', 'channel']

app.use(cors());
app.use(express.json());
app.use(express.static('public/images'));

app.use('/videos', (req, res, next) => {
    const reqKeys = req.body ? Object.keys(req.body) : null;
    if (req.method === 'POST') {
        if(!VIDEO_UPLOAD_KEYS.every(key => reqKeys.includes(key))) {
            return res.status(400).json({message: `Body should include keys: ${VIDEO_UPLOAD_KEYS}`})
        }
        if (req.headers['content-type'] !== 'application/json') {
            return res.status(400).json({message: 'Content type has to be application/json'})
        }
    }
    next();
})

app.use('/videos', videoRouter);

// app.use('/videos/:videoId/comment', )

app.listen(PORT, () => {
    console.log(`Port open at ${PORT}.`);
    console.log('Press Ctrl+C or Command+C to exit.')
})