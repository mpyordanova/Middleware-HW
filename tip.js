const express = require ("express")



//  creates new router
const tipCalculator = express.Router()

tipCalculator.route("/")
.get((req,res)=>{
    res.status(200).json({message:"Would you like us to calculate your tip?"})
})

tipCalculator.route("/")
.post((req.res)=>{
    res.status(200).json({message:Tip, })
})

module.exports = tipCalculator