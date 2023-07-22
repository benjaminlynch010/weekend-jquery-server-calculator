const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const PORT = 5000

app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static('server/public'))

// functions to compute (add, subtract, multipy, divide)
  // send back the OK

// setup POST route for inputs object capture

// GET request after POST to get actual calculation

// recieve input from client.js when '=' is clicked

// history should exist in server after refresh





app.listen(PORT, () => {
  console.log('🙉 on port', PORT)
})