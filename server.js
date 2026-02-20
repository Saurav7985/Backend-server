const app = require('./src/app')
const connect = require('./src/config/database')
require('dotenv').config()
const port = process.env.PORT || 3000 

connect()
app.listen(port,()=>{
    console.log("server is started");
}) 