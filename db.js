const mongoose = require('mongoose');
const path = require('path');



async function connectDB(){
console.log(process.env.MONGO_URL)
    await mongoose.connect( process.env.MONGO_URL)
    console.log('mongodb connection established');
}

async function disconnectDB(){
    mongoose.disconnect();
}

module.exports = {
    connectDB,
    disconnectDB
};