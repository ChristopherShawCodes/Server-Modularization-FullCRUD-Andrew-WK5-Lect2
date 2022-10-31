const UserController = require('../controllers/user.controllers')

module.exports = (app) =>{
    app.post('/api/addUser', UserController.addUser)
    app.get('/api/getAllUsers', UserController.getAllUsers )
    app.get('/api/findById/:id', UserController.findById )
    app.put('/api/update/:id' , UserController.updateById)
    app.delete('/api/delete/:id' ,UserController.deleteById)
}
