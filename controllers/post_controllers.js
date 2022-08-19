const db = require('../models/index.js')
const post = db.post

exports.createPost = async(req,res) => {
    try{
        const body = req.body
        const data = await post.create(body)
        res.send({
            status: true,
            data: data
        })
    }
    catch(err){
        res.send({
            status: false,
            message: err
        })
    }   
}

exports.getPost = async(req,res) => {
    try{
        const data = await post.findAll()
        res.send({
            status: true,
            data: data
        })
    }
    catch(err){
        res.send({
            status: false,
            message: err
        })
    }   
}

exports.deletePost = async(req,res) => {
    try{
        const id = req.query.id
        const findPost = await post.findOne({where:{id:id}})
        if(findPost){
            const data = await post.destroy({where:{id:id}})
            if(data){
                res.send({
                    status: true,
                    message: 'Post deleted'
                })
            }else{
                res.send({
                    status: true,
                    message: 'Post not deleted'
                })
            }
        }else{
            res.send({
                status: true,
                message: 'Post not found'
            })
        }
    }
    catch(err){
        res.send({
            status:false,
            message:err
        })
    }
}