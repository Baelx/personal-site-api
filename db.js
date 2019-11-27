const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const url = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOSTNAME}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}?authSource=admin`;

// Conntect to the DB and handle connection problems
mongoose.connect(url, {useNewUrlParser: true})
    .then(() => {
        console.log('connected to db!');
        
    })
    .catch(() => {
        console.log('not connected!!');
        
    })