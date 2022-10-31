const userRoutes = require("../routes/user.routes")
const User = require('../models/user.model')


const addUser = (req,res) =>{
    User.create(req.body)
    .then((result) =>{
        res.json(result)
    }).catch((err) =>{
        console.log(err)
    })
}

const getAllUsers = (req,res) =>{
    User.find()
    .then((result) =>{
        res.json(result)
    }).catch(err => console.log(err))
}


const findById = (req,res) =>{
    User.findOne({_id:req.params.id})
    .then((result) =>{
        res.json(result)
    }).catch((err) =>{
        console.log(err)
    })
}


const updateById = (req,res) =>{
    User.updateOne({_id:req.params.id}, req.body)
    .then((result)=>{
        res.json(result)
    }).catch(err => console.log(err))
}


const deleteById = (req,res) =>{
    User.deleteOne({_id:req.params.id})
    .then((result) =>{
        res.json(result)
    }).catch((err) =>{
        console.log(err)
    })
}

module.exports = {
    addUser,
    getAllUsers,
    findById,
    updateById,
    deleteById
}