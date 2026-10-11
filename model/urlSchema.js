const  mongoose = require('mongoose')

// 2. Define Mongoose Schema and Model
const urlSchema = new mongoose.Schema({
    originalURL: { 
        type: String,
        required: true 
    },
    shortURL: { 
        type: String, 
        required: true, 
        unique: true
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
})


module.exports = mongoose.model( "Url", urlSchema)