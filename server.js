const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const bodyParser = require("body-parser")

const tipCalculatorRoute = require("./Routes/tip")

const greetRouter = require("./Routes/greeting")
const magicRouter = require("./Routes/magic")
const res = require("express/lib/response")
const passRouter  = require("./Routes/pass-it-around")
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
server.use("/Routes/magic", magicRouter)
server.use("/Routes/pass-it-around", passRouter)
// Routes go Here
// /:name - I can put my name instead of name. 
//  +req.params.name and go to Postman and type after PORT anything like /Hello Jimmy..." and it will displey in the body

server.get("/Routes/greeting", (req, res)=>{
    res.status(200).json({message: "Whats up! Good to see you ${res.params.name}"})
    })

    server.get("/tip/:total/:tipPercentage", (req, res)=>{
    res.status(200).json({message:`Your tip is ${req.params.total*req.params.tipPercentage/100}`})
})
// Magic 8 ball
server.get("/Routes/magic/Will%20I%20Be%20A%20Millionaire", (req, res)=>{
    res.status(200).json({message:"Most likely"})
})
// Bottles

server.get("/Routes/pass-it-around", (req, res)=>{
    let counter = 99
    res.status(200).json({message: `${counter} Bottles of beer on the wall`})
})    
server.get("/multiple/:bottleNumber", (req, res)=>{
    let counter = 99 - 1
    let bottleNumber = req.params.bottleNumber
    let numberBottles = bottles(bottleNumber)
    res.status(200).json({message: numberBottles, link: `localhost:5000/${bottleNumber-1}`})
})


server.listen(PORT, ()=>{
    console.log(`Server is listening at ${PORT}`)
})