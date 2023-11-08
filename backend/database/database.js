const mongoose = require('mongoose');
const { env } = require('./envs.js');

const startConnection = async () => {
    try {
        await mongoose.connect(env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('DB is connected');
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
};

module.exports = {
    startConnection
};