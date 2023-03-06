import express from 'express'
import {
  listId
} from '../controllers/idCoutroller.js'

const router = express.Router()

router.post('/', listId) // SELECT
// router.post('/', createCourse) // INSERT
// router.delete('/', deleteCourse) // DELETE
// router.put('/', updateCourse) // UPDATE

export default router