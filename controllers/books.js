import { Book } from '../models/book.js'

export {
  index,
  show,
  create,
  update,
  deleteBook as delete
}

// Alternate method
// function index(req, res) {
//   Book.find({}, function (err, books) {
//     if (err) return res.status(200).json(books)
//     res.status(200).json(books)
//   })
// }


function index(req, res) {
  Book.find({})
  .then(books => {
    res.status(200).json(books)
  })
  .catch(err => {
    res.json(err)
  })
}

function show(req, res) {
  Book.findById(req.params.id)
        .then(book => {
          res.status(200).json(book)
        })
        .catch(err => {
          res.json(err)
        })
}

function create(req, res) {
  Book.create(req.body)
  .then(book => {
    res.json(book)
  })
  .catch(err => {
    res.json(err)
  })
}

function update(req, res) {
  Book.findByIdAndUpdate(req.params.id, req.body, {new:true})
        .then(book => {
          res.status(200).json(book)
        })
        .catch(err => {
          res.json(err)
        })
}

function deleteBook(req, res) {
  Book.findByIdAndDelete(req.params.id)
        .then(book => {
          res.json(book)
        })
        .catch(err => {
          res.json(err)
        })
}