const express = require('express')
const app = express()
const port = 8000

//middleware functions that allow us to add post data
//into the requests
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//require config file that connects to db
require('./config/mongoose.config')

const userRoutes = require('./routes/user.routes')
userRoutes(app)

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`)
})