const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const PORT = 5000

app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static('server/public'))

let answers = [
  {input: 3},
  {input: 8},
  {operator: '+'}
]


// setup POST route for inputs object capture
  // history should exist in server after refresh
app.post('/problems', (req, res) => {
  console.log('body for problems:', req.body)

  let inputToCalculate = req.body
  answers.push(inputToCalculate)

  console.log('array of calculations:', answers)
  res.sendStatus(201)
})

// GET request after POST to get actual calculation
app.get('/answers', (req, res) => {
  console.log('arrived at /answers! answer list:', answers)
  // server is responding with the answers array
  res.send(answers)
  res.sendStatus(200)
})


// port binding
app.listen(PORT, () => {
  console.log('🙉 on port:', PORT)
})


// functions to compute (add, subtract, multipy, divide)
  // send back the OK
// recieve input from client.js when '=' is clicked





