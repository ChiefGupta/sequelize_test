const express = require('express')
const {createUser, getUser, deleteUser, findUser, updateUser} = require('../controllers/user_controllers')
const router = express.Router()

router.post('/createUser', createUser)
router.get('/getUser', getUser)
router.get('/findUser', findUser)
router.put('/updateUser', updateUser)
router.delete('/deleteUser', deleteUser)

module.exports = router