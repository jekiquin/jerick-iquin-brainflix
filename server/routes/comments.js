const router = require('express').Router();
const fs = require('fs');
const uniqid = require('uniqid');

const VIDEO_DETAILS = './data/video-details.json';