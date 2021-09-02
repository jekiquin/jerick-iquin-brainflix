const fs = require('fs');

const VIDEO_DETAILS = './data/video-details.json';

const readData = () => {
    return JSON.parse(fs.readFileSync(VIDEO_DETAILS));
}

const writeFile = (data) => {
    fs.writeFileSync(VIDEO_DETAILS, JSON.stringify(data));
}

module.exports = {readData, writeFile}