const express = require('express');
const app = express();
const cors = require('cors');
const videoRouter = require('./routes/videos');

require('dotenv').config();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.static('public/images'));

app.use('/videos', videoRouter);

app.listen(PORT, () => {
    console.log(`Port open at ${PORT}.`);
    console.log('Press Ctrl+C or Command+C to exit.')
})