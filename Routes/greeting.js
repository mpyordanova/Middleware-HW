const express = require ("express")
const greetRouter = express.Router()


greetRouter.get('/:name',(req, res)=>{
 res.status(200).json(`${req.params.name}! It's so great to see you!`)
})




module.exports = greetRouter
