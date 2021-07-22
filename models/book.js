import mongoose from 'mongoose'
const Schema = mongoose.Schema

export {
  Book
}

const bookSchema = new Schema({
  name: {type: String, required: true},
  author: String,
  publish: String,
})

const Book = mongoose.model("Book", bookSchema)