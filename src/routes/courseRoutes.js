import express from 'express'
import {
  listAllCourses,
  listId,
  createCourse,
  deleteCourse,
  deleteId,
  updateCourse
} from '../controllers/courseCoutroller.js'

const router = express.Router()

router.get('/', listAllCourses) // SELECT
router.get('/:id', listId)
router.post('/', createCourse) // INSERT
router.delete('/', deleteCourse) // DELETE
router.delete('/:id', deleteId) 
router.put('/', updateCourse) // UPDATE

export default router