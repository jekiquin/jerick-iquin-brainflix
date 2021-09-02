const express = require('express');
const app = express();
const cors = require('cors');
const videoRouter = require('./routes/videos');
const commentRouter = require('./routes/comments');
require('dotenv').config();

const PORT = process.env.PORT || 5002;
const VIDEO_UPLOAD_KEYS = ['title', 'description', 'channel'];
const COMMENT_UPLOAD_KEYS = ['name', 'comment'];

app.use(cors());
app.use(express.json());
app.use(express.static('public/images'));

app.use('/videos', middleware);
app.use('/', videoRouter);

app.use('/videos', commentRouter);


app.listen(PORT, () => {
    console.log(`Port open at ${PORT}.`);
    console.log('Press Ctrl+C or Command+C to exit.')
})

function middleware(req, res, next) {
    const reqKeys = req.body ? Object.keys(req.body) : null;
    const path = req.originalUrl;
    if (!reqKeys) {
        return res.status(400).json({message: 'No content!'})
    }
    if (req.method === 'POST') {
        const keys = path.includes('comments') ? COMMENT_UPLOAD_KEYS : VIDEO_UPLOAD_KEYS;
        if(!keys.every(key => reqKeys.includes(key)) || keys.length !== reqKeys.length) {
            return res.status(400).json({message: `Body should only include keys: ${keys}`})
        }
        if (req.headers['content-type'] !== 'application/json') {
            return res.status(400).json({message: 'Content type has to be application/json'})
        }
    }
    next();
}