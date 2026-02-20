const express = require('express')
const notesModel = require('./models/notes.model')
const cors = require('cors')
const path = require('path')


const app = express()
app.use(cors()) 
app.use(express.json())
app.use(express.static("./Public"))


/*POST
notesmodel.create({})
 */

app.post('/api/notes',async (req,res)=>{

    const {title, description} = req.body
     
    const note = await notesModel.create({
        title, description
    })

    res.status(201).json({
        message : "Note Create Succesfully",
        note
    })

})

/* GEt bhy notesmodel.find() */

app.get('/api/notes',async (req,res)=>{

    const notes =  await notesModel.find()

    res.status(200).json({
        message : "Data is fatched",
        notes
    })
})

/*DELETE 
 */

app.delete('/api/notes/:id', async(req,res)=>{
  
  const id = req.params.id

  await notesModel.findByIdAndDelete(id)

res.status(200).json({
    message : " notes deleted succesfully",
})

})


app.patch('/api/notes/:id', async (req, res)=>{
    
   const id = req.params.id
   const {description} = req.body

   await notesModel.findByIdAndUpdate(id,{description})

   const notes = await notesModel.find()

   res.status(200).json({
    message : "Quary is updated",
    notes
   })
})


// app.use('*name', (req, res) => {
//     res.sendFile(
//         path.join(__dirname, '..', 'Public','index.html')
//     )
// })


module.exports = app