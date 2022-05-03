const express = require("express")
const magicRouter = express.Router()

const response = [
                "It is certain",
                "It is decidedly so",
                "Without a doubt", 
                "Yes definitely",
                "You may rely on it", 
                "As I see it yes",
                "Most likely", 
                "Outlook good","Yes", 
                "Signs point to yes",
                "Reply hazy try again", 
                "Ask again later",
                "Better not tell you now",
                "Cannot predict now",
                "Concentrate and ask again",
                "Don't count on it", 
                "My reply is no", 
                "My sources say no",
                "Outlook not so good",
                "Very doubtful"
]

// Get random answer
function getRandomResponse(response){
    const i= Math.floor(Math.random()*response.length);
    const answer= response[i];
    return answer;
}
const result = getRandomResponse(response);
console.log(result)
// create route for question


magicRouter.get('/magic',(req, res)=>{
res.status(200).json(getRandomResponse)
})


magicRouter.get('/magic/Will%20I%20Be%20A%20Millionaire',(req, res)=>{
    res.status(200).json(getRandomResponse)
    })



// greetRouter.get('/:name',(req, res)=>{
//     res.status(200).json(`${req.params.name}! It's so great to see you!`)
//    })
   
module.exports = magicRouter