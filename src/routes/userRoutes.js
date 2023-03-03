import express from 'express'
import {
  listAllUser,
  createUser,
  deleteUser,
  updateUser
} from '../controllers/courseCoutroller.js'

const router = express.Router()

router.get('/', listAllUser);
router.post('/', createUser);
router.delete('/', deleteUser);
router.put('/', updateUser);

export default router