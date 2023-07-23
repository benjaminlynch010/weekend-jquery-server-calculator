$(onReady)

// global variable for answers object
let answers


function onReady() {
  console.log('jQuery 🤩');
// handlers for buttons
$('#equals').on('click', getAnswers)
// $('#clear').on('click', handleClear)
} // end onReady

let inputsForPost = () => {
  console.log('in inputsForPost')
  const inputsForPost = {
    input: 2,
    input: 5,
    operator: minus
  }

// Ajax to communicate / send data to server.js
  // url: /incoming
  $.ajax({
    method: 'POST', // request type
    url: '/problems', // route
    data: inputsForPost // data to send (obj or array)
  }).then((response) => {
    console.log('😸 POST:', response) // expect 201

    getAnswers()
    // render () *** setup render function ***
  
  }).catch((error) => {
    console.log('POST error:', error)
    alert('😿 POST error')
  })
}


let getAnswers = () => {
  // ajax to GET answers from server
    // server endpoint: 
  console.log('inside getAnswers')

  $.ajax({
    method: 'GET', // how
    url: '/answers', // where
  }).then((response) => {
    console.log('😸 GET:', response)
    answers = response
    // render() *** setup render function ***
  }).catch((error) => {
    console.log('GET error', error)
    alert('😿 GET request failed')
  })

  } // end getAnswers





// function handleCapture(num1, num2) {
//   // capture inputs to send to server
//   let leftInput = Number($('#input-left').val())
//   let rightInput = Number($('#input-right').val())

//   // for POST to server
//   let inputsForPost = [
//     {firstNumber: leftInput},
//     {secondNumber: rightInput} 
//   ]
//   console.log(inputsForPost)
// } // end handleCapture

// function handleClear() {
//       // clear text boxes
//       $('#input-left').val('')
//       $('#input-right').val('')

// } // end handleClear

// function render() {
// console.log('render 👌')

// } // end render
