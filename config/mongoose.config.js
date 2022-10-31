const mongoose = require('mongoose')
const db = 'testdb3'


mongoose.connect(`mongodb://localhost/${db}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((res) =>{
    console.log(`Successfully connected to Database: ${db}`)
}).catch((err) =>{
    console.log(`Unable to connect to database: ${db}`)
})

