const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const bodyParser = require("body-parser")

const tipCalculatorRoute = require("./Routes/tip")
// const todoRouter = require("./routes/todoRouter")
const greetRouter = require("./Routes/greeting")
// Config Goes Here
require("dotenv").config()

const server = express()
const PORT = process.env.PORT || 3000


server.use(cors("*"))
server.use(express.json())
server.use(bodyParser.json())
server.use(morgan("dev"))

// it uses everything in the tip file /tip
server.use("/Routes", tipCalculatorRoute)
server.use("/Routes/greeting", greetRouter)
// Routes go Here
// /:name - I can put my name instead of name. 
//  +req.params.name and go to Postman and type after PORT anything like /Hello Jimmy..." and it will displey in the body

server.get("/Routes/greeting", (req, res)=>{
    res.status(200).json({message:" Good to see you ${res.params.name}"})
    })

    server.get("/tip/:total/:tipPercentage", (req, res)=>{
    res.status(200).json({message:`Your tip is ${req.params.total*req.params.tipPercentage/100}`})
})

server.listen(PORT, ()=>{
    console.log(`Server is listening at ${PORT}`)
})