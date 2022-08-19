const express = require('express')
const router = express.Router()

const user = require('./user_route')
const posts = require('./posts_route')

router.use('/', user)
router.use('/', posts)

module.exports = router