const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const PORT = 5000

app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static('server/public'))

let answerList = []
let inputToCalculate
let answerPackage

function calculator(inputObject) {
  console.log('in calculator, object is:', inputObject)
  let answer = 0
  let num1 = Number(inputObject.first)
  let num2 = Number(inputObject.second)
  console.log('num1:', num1)
  if (inputObject.operator == '+') {
   answer = (num1 + num2)
   console.log('answer is:', answer)
  }
  else if (inputObject.operator == '-') {
    answer = num1 - num2
  }
  else if (inputObject.operator == '*') {
    answer = num1 * num2
  }
  else if (inputObject.operator == '/') {
    answer = num1 / num2
  }
     console.log('in calculator testing answer', answer)
  answerPackage = {
    input1: inputObject.first,
    input2: inputObject.second,
    operation: inputObject.operator,
    solution: answer 
  }
  console.log('this is the answer package:', answerPackage)
  answerList.unshift(answerPackage)
}

// setup POST route for inputs object capture
  // history should exist in server after refresh
app.post('/problems', (req, res) => {
  console.log('body for problems:', req.body)

  inputToCalculate = req.body
  console.log(inputToCalculate)
  calculator(inputToCalculate)

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





