const express = require('express')
const {createPost, getPost, deletePost} = require('../controllers/post_controllers')
const router = express.Router()

router.post('/createPost', createPost)
router.get('/getPost', getPost)
router.delete('/deletePost', deletePost)

module.exports = router