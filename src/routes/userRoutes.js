import express from 'express'
import {
  listAllUsers,
  listId,
  createUser,
  deleteUser,
  deleteId,
  updateUser
} from '../controllers/userCoutroller.js'

const router = express.Router()

router.get('/', listAllUsers)
router.get('/:id', listId)
router.post('/', createUser)
router.delete('/', deleteUser)
router.delete('/:id', deleteId)
router.put('/', updateUser)

export default router