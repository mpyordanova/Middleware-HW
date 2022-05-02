
const express = require ("express")
const req = require("express/lib/request")



//  creates new router
const tipCalculatorRoute = express.Router()

tipCalculatorRoute.route("/Routes")
.get((req,res)=>{
    res.status(200).json({message:"Would you like us to calculate your tip?"})
})

tipCalculatorRoute.route("/Routes/tip/:total/:tipPercentage")
.put((req,res)=>{
    let total= 100;
    let tipPersantage =20;

    res.status(200).json({message:`Tip, ${req.params.total*req.params.tipPercentage/100}` })
})

module.exports = tipCalculatorRoute
