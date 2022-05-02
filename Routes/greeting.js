const express = require ("express")
const greetRouter = express.Router()


greetRouter.get('/:name',(req, res)=>{

    res.status(200).json(`${req.params.name}! It's so great to see you!`)
})

// greetRouter.get('/:name',(req, res)=>{
//     res.status(200).json({name: req.params.name})
//  })


module.exports = greetRouter
