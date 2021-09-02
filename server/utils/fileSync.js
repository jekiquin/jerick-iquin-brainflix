const fs = require('fs');

const readData = (file) => {
    return JSON.parse(fs.readFileSync(file));
}

const writeFile = (file, data) => {
    fs.writeFileSync(file, JSON.stringify(data));
}

module.exports = {readData, writeFile}