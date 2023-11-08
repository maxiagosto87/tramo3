// envs.js
require('dotenv').config();
const mongoose = require('mongoose');

const env = {
    MONGO_URI: process.env.MONGO_URI
};

module.exports = {
    env
};