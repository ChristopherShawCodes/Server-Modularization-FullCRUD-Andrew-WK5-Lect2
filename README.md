# Server-Modularization-FullCRUD-Andrew-WK5-Lect2

Youtube: https://www.youtube.com/watch?v=oNaIsitakZQ

Server Setup Full CRUD for Mongo DB


----------------------------------------------
Server.js

    `const express = require('express')
    
     const app = express()
     
     const port = 8000`

//middleware functions that allow us to add post data

//into the requests

    `app.use(express.json())
    
    app.use(express.urlencoded({extended: true}))`

//require config file that connects to db

    `require('./config/mongoose.config')

    const userRoutes = require('./routes/user.routes')
    
    userRoutes(app)

    app.listen(port, () =>{
    
    console.log(`Server is running on port ${port}`)
    
    })`

----------------------------------------------

mongoose.config.js 

    `const mongoose = require('mongoose')

    const db = 'testdb3'


    mongoose.connect(`mongodb://localhost/${db}`,{
    
    useNewUrlParser: true,
    
    useUnifiedTopology: true
    
    }).then((res) =>{

    console.log(`Successfully connected to Database: ${db}`)
    
    }).catch((err) =>{

    console.log(`Unable to connect to database: ${db}`)
    
    })`


----------------------------------------------

user.routes.js

    `const UserController = require('../controllers/user.controllers')

    module.exports = (app) =>{
    
    app.post('/api/addUser', UserController.addUser)
    
    app.get('/api/getAllUsers', UserController.getAllUsers)
    
    app.get('/api/findById/:id', UserController.findById)
    
    app.put('/api/update/:id' , UserController.updateById)
    
    app.delete('/api/delete/:id' ,UserController.deleteById)
    
    }`

----------------------------------------------

user.model.js

    `const mongoose = require('mongoose')

// create a new schema or blueprint

    const UserSchema = new mongoose.Schema({
    
    name: String,
    
    age: Number,
    
    developer: Boolean
    
    })


//create a new model/collection in database

    const User = mongoose.model('User', UserSchema)


//export for use elsewhere

    module.exports = User`

----------------------------------------------

user.controllers.js

    `const userRoutes = require("../routes/user.routes")
    
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
    
    }`
