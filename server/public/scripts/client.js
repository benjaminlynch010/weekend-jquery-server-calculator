$(onReady);

// global variable for answers object
let serverAnswerList = [];

function onReady() {
  console.log("jQuery 🤩");
  getAnswer();
  // handlers for buttons
  $("#equals").on("click", inputPackager);
  $(".operator").on("click", "button", getOperator);
  $("#clear").on("click", handleClear);
} // end onReady

let operatorbutton;
function getOperator() {
  console.log($(this).text());
  operatorbutton = $(this).text();
  return operatorbutton;
}

function inputPackager() {
  let inputOne = $("#input-left").val();
  let inputTwo = $("#input-right").val();
  let inputPackage = {
    first: inputOne,
    second: inputTwo,
    operator: operatorbutton,
  };

  // Ajax to communicate / send data to server.js
  // url: /incoming
  $.ajax({
    method: "POST", // request type
    url: "/problems", // route
    data: inputPackage, // data to send (obj or array)
  })
    .then((response) => {
      console.log("😸 POST:", response); // expect 201

      getAnswer();
    })
    .catch((error) => {
      console.log("POST error:", error);
      alert("😿 POST error");
    });
}

function getAnswer() {
  // ajax to GET answers from server
  // server endpoint: /answers
  console.log("inside getAnswer");

  $.ajax({
    method: "GET", // how
    url: "/answers", // where
  })
    .then((response) => {
      console.log("😸 GET:", response);
      serverAnswerList = response;
      console.log("answer list:", serverAnswerList);
      render();
    })
    .catch((error) => {
      console.log("GET error", error);
      alert("😿 GET request failed");
    });
} // end getAnswer

function render() {
  console.log("render 👌");
  // empty history
  $("#history").empty();
  // loop through array and append
  for (let problem of serverAnswerList) {
    console.log("in for loop, problem:", problem);
    $("#history").append(`
        <li>
        ${problem.input1} ${problem.operation} ${problem.input2} = ${problem.solution}
        </li>
      `);
  }
} // end render

function handleClear() {
  // clear text boxes
  $("#input-left").val("");
  $("#input-right").val("");
} // end handleClear
