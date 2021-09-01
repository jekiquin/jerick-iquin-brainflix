const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Port open at ${PORT}.`);
    console.log('Press Ctrl+C or Command+C to exit.')
})