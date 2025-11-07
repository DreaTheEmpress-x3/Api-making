const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    author:{
        type: String,
        required: false,
        trim: true
    },
    authorImage:{
        type: String,
        required: false,
    },
    rating:{
        type: Number,
        min: 1,
        max: 5,
        required: false,
    }
})

module.exports = mongoose.model('Todo', todoSchema, 'todos')
