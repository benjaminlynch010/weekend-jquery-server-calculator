$(onReady)

function onReady() {
  console.log('jQuery 🤩');

// handlers for buttons
$('#equals').on('click', handleCapture)
$('#clear').on('click', handleClear)

} // end onReady

function handleCapture(num1, num2) {
  // capture inputs to send to server
  let leftInput = Number($('#input-left').val())
  let rightInput = Number($('#input-right').val())

  // for POST to server
  let inputsToSend = [
    {firstNumber: leftInput},
    {secondNumber: rightInput} 
  ]
  console.log(inputsToSend)
} // end handleCapture

function handleClear() {
      // clear text boxes
      $('#input-left').val('')
      $('#input-right').val('')

}

function render() {
console.log('render 👌')

}
