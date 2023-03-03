const express = require('express')
const router = express.Router()
const userController = require('../controllers/userCoutroller')

const { listAllUser, createUser, deleteUser, updateUser } = userController

router.get('/', listAllUser);
router.post('/', createUser);
router.delete('/', deleteUser);
router.put('/', updateUser);

module.exports = router;