const mongoose = require('mongoose')

function connect(){
    
    mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("database is connected");
    })
    
}

module.exports = connect

