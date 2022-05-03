const express = require("express")
const passRouter = express.Router()

function bottles (num) {
    let numberBottles = []
    // let bottles = bottles
    for(let counter = num; counter >= 1; counter--)
    {
        numberBottles.push(counter + " bottles of beer on the wall. " + counter + " bottles of beer. Take one down. Pass It Around." + (counter-1) + " bottles of beer on the wall" )
    }
    return numberBottles
}





module.exports = passRouter