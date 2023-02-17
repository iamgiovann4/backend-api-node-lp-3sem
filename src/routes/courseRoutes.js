//criando rotas
const express = require('express')
const mysql = require('mysql')
const router = express.Router()

const courseController = require('../controllers/courseCoutroller')

router.get('/', courseController.listAllCourses);
router.post('/', courseController.createCourse);

module.exports = router;