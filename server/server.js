const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const PORT = 5000

app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static('server/public'))

let answerList = [

]
// setup POST route for inputs object capture
  // history should exist in server after refresh
app.post('/problems', (req, res) => {
  console.log('body for problems:', req.body)

  let inputToCalculate = req.body
 
  answerList.push(inputToCalculate)

  console.log('array of calculations:', answerList)
  res.sendStatus(201)
})


// GET request after POST to get actual calculation
app.get('/answers', (req, res) => {
  console.log('arrived at /answers! answer list:', answerList)
  // server is responding with the answerList array
  res.send(answerList)
  // res.sendStatus(200) 
})


// port binding
app.listen(PORT, () => {
  console.log('🙉 on port:', PORT)
})


// functions to compute (add, subtract, multipy, divide)
  // send back the OK
// recieve input from client.js when '=' is clicked





