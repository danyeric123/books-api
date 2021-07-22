import { Router } from 'express'
const router = Router()
import * as booksCtrl from '../controllers/books.js'


router.get('/books', booksCtrl.index)
router.get('/books/:id', booksCtrl.show)
router.post('/books', booksCtrl.create)
router.put('/books/:id', booksCtrl.update)
router.delete('/books/:id', booksCtrl.delete)

export {
  router
}
