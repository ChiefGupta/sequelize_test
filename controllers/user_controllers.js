const db = require('../models/index.js')
const user = db.user

exports.createUser = async(req,res) => {
    try{
        const body = req.body
        const data = await user.create(body)
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

exports.getUser = async(req,res) => {
    try{
        const data = await user.findAll()
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

exports.findUser = async(req,res) => {
    try{
        const uuid = req.query.uuid
        const findUser = await user.findOne({where:{uuid:uuid}})
        if(findUser){
            res.send({
                status: true,
                data: findUser
            })
        }else{
            res.send({
                status: true,
                message: 'User not found'
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

exports.updateUser = async(req,res) => {
    try{
        const uuid = req.query.uuid
        const body = req.body
        const findUser = await user.findOne({where:{uuid:uuid}})
        if(findUser){
            const data = await user.update(body,{where:{uuid:uuid}})
            if(data){
                res.send({
                    status: true,
                    message: 'User updated'
                })
            }
            else{
                res.send({
                    status: true,
                    message: 'User not updated'
                })
            }
        }else{
            res.send({
                status: true,
                message: 'User not found'
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

exports.deleteUser = async(req,res) => {
    try{
        const uuid = req.query.uuid
        const findUser = await user.findOne({where:{uuid:uuid}})
        if(findUser){
            const data = await user.destroy({where:{uuid:uuid}})
            if(data){
                res.send({
                    status: true,
                    message: 'User deleted'
                })
            }else{
                res.send({
                    status: true,
                    message: 'User not deleted'
                })
            }
        }else{
            res.send({
                status: true,
                message: 'User not found'
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