const db = require("../models/index.js")
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
            data: err
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
            data: err
        })
    }   
}