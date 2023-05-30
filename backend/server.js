// const express = require("express")
// const cors =require("cors")
// const mongoose = require("mongoose")
// const app = express()
// app.use(express.json())
// app.use(cors())

// mongoose.connect("mongodb+srv://Orxan228:orxan002@cluster0.ciqzcen.mongodb.net/").then(()=>{
//     console.log("Db connected");
// })

// const cardSchema = mongoose.Schema({
//     name:{
//         type:String,
//         required:true,
//     },
//     price:{
//         type:Number,
//         required:true
//     },
// }) 
// const cardModel = mongoose.model("cardModel", cardSchema)

// //get all

// app.get("/products", async(req,res)=>{
//     const data = await cardModel.find()
//     if(!data)
//     {
//         res.status(404).send("error")
//     }
//     res.status(202).send(data)
// })

// //get by id
// app.get("/products/:id", async(req,res)=>{
//     const {id} = req.params
//     const target = await cardModel.findById(id)
//     res.send(target)
// })
// //post 

// app.post("/products", async(req,res)=>{
//     const newCard = new cardModel({
//         ...req.body
//     })
//     await newCard.save()
//     res.send(newCard)
// })

// //delete

// app.delete("/products/:id", async(req,res)=>{
//     const {id} = req.params
//     await cardModel.findByIdAndDelete(id)
//     res.send(`Item with id: ${id} was deleted`)
// })

// app.listen(7777,()=>{
//     console.log("App is running on PORT:7777");
// })


const express= require("express")
const cors = require ("cors")
const mongoose = require("mongoose")
const app = express() 
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://Orxan228:orxan002@cluster0.ciqzcen.mongodb.net/").then(()=>{
    console.log("Db Connected");
})
cardSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})

const cardModel = mongoose.model("cardModel",cardSchema)

//get  all

app.get("/products", async(req,res)=>{
    const data = await cardModel.find()
    if(!data){
        res.status(404).send("error")
    }
    res.status(200).send(data)
})

//get by id

app.get("/products/:id", async (req,res)=>{
    const {id} = req.params
    const target = await cardModel.findById(id)
    res.send(target)
})

//post

app.post("/products", async(req,res)=>{
    const newCard = new cardModel({
        ...req.body
    })
    await newCard.save()
    res.send(newCard)
})

//delete

app.delete("/products/:id", async(req,res)=>{
    const {id} = req.params
    await cardModel.findByIdAndDelete(id)
    res.send(`Item with id:${id} was deleted!`)
})

app.listen(7777,()=>{
    console.log("App is running on PORT:7777");
})