const mongoose = require('mongoose')
const { Schema } = mongoose 

const bookSchema = new Schema({
    title: String,
    description: String,
    year: Number,
    quantity: Number,
    imageURL: String
})

const Book = mongoose.model('Book', bookSchema)
module.exports = Book