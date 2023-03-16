import express from 'express'
import {
  listAllCourses,
  listId,
  createCourse,
  deleteCourse,
  updateCourse
} from '../controllers/courseCoutroller.js'

const router = express.Router()

router.get('/', listAllCourses) // SELECT
router.get('/:id', listId)
router.post('/', createCourse) // INSERT
router.delete('/', deleteCourse) // DELETE
router.put('/', updateCourse) // UPDATE

export default router