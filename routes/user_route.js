const express = require('express')
const {createUser, getUser, deleteUser, findUser} = require('../controllers/user_controllers')
const router = express.Router()

router.get('/getUser', getUser)
router.get('/findUser', findUser)
router.post('/createUser', createUser)
router.delete('/deleteUser', deleteUser)

module.exports = router