import express from 'express'
import {
  listAllUsers,
  createUser,
  deleteUser,
  updateUser
} from '../controllers/userCoutroller.js'

const router = express.Router()

router.get('/', listAllUsers);
router.post('/', createUser);
router.delete('/', deleteUser);
router.put('/', updateUser);

export default router