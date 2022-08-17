const express = require('express')
const {createUser, getUser} = require('../controllers/user_controllers')
const router = express.Router()

router.get("/getUser", getUser)
router.post("/createUser", createUser)

module.exports = router