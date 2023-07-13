
const mongoose = require('mongoose');

async function connect() {

    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/f8_education_dev').then(() =>console.log('connection success'))
        
    } catch (error) {
        console.log(error)
    }
    
}

module.exports = { connect }