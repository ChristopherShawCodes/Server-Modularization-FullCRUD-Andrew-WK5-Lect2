const mongoose = require('mongoose')

// create a new schema or blueprint
const UserSchema = new mongoose.Schema({
    name: String,
    age: Number,
    developer: Boolean
})


//create a new model/collection in database
const User = mongoose.model('User', UserSchema)


//export for use elsewhere
module.exports = User