const express = require('express')
const router = express.Router()

router.post("/createUser", createUser)

module.exports = router