$(onReady)

// global variable for answers object
let serverAnswerList
let formattedAnswer


function onReady() {
  console.log('jQuery 🤩');

// handlers for buttons
$('#equals').on('click', getAnswer, inputPackager)
$('.operator').on('click', 'button', getOperator)
// $('#clear').on('click', handleClear)
} // end onReady

let operatorbutton
function getOperator() {
  console.log($(this).text())
  operatorbutton = $(this).text()
  return operatorbutton
}

function inputPackager() {
  let inputOne = $('#input-left').val()
  let inputTwo = $('#input-right').val()
  let inputPackage = {
    problem: (`${inputOne} ${operatorbutton} ${inputTwo}`),
    answer: 0
  }
  console.log(inputPackage)

// Ajax to communicate / send data to server.js
  // url: /incoming
  $.ajax({
    method: 'POST', // request type
    url: '/problems', // route
    data: inputPackage // data to send (obj or array)
  }).then((response) => {
    console.log('😸 POST:', response) // expect 201

    getAnswer()
    render()
  
  }).catch((error) => {
    console.log('POST error:', error)
    alert('😿 POST error')
  })
}


function getAnswer() {
  // ajax to GET answers from server
    // server endpoint: /answers
  console.log('inside getAnswer')

  $.ajax({
    method: 'GET', // how
    url: '/answers', // where
  }).then((response) => {
    console.log('😸 GET:', response)
    serverAnswerList = response
    console.log('answer list:', serverAnswerList)
    render()
  }).catch((error) => {
    console.log('GET error', error)
    alert('😿 GET request failed')
  })

  } // end getAnswer

  function render() {
    console.log('render 👌')
    // empty history
    $('#history').empty()
    // loop through array and append 
    for (let problem of serverAnswerList) {
      console.log(problem)
      $('#history').append(`
        <li>
          ${problem.problem} = ${problem.answer}
        </li>
      `)
    }
    } // end render



// function handleCapture(num1, num2) {
//   // capture inputs to send to server
//   let leftInput = Number($('#input-left').val())
//   let rightInput = Number($('#input-right').val())

//   // for POST to server

// } // end handleCapture

// function handleClear() {
//       // clear text boxes
//       $('#input-left').val('')
//       $('#input-right').val('')

// } // end handleClear


