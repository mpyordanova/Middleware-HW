const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const bodyParser = require("body-parser")
const tipRouter = require("./tip")
// const todoRouter = require("./routes/todoRouter")

// Config Goes Here
require("dotenv").config()

const server = express()
const PORT = process.env.PORT || 3000


server.use(cors("*"))
server.use(express.json())
server.use(bodyParser.json())
server.use(morgan("dev"))
// it uses everything in the tip file /tip
server.use("/tip", tipRouter)

// Routes go Here
// /:name - I can put my name instead of name. 
//  +req.params.name and go to Postman and type after PORT anything like /Hello Jimmy..." and it will displey in the body
server.get("/:name", (req, res)=>{
    res.status(200).json({message: "Hello." + req.params.name})
})
server.get("/tip", (req, res)=>{
    res.status(200).json
})







server.listen(PORT, ()=>{
    console.log(`Server is listening at: ${PORT}`)
})