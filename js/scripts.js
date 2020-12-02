//Business Logic
let loop = function(userInput) {
  let array = [];
  for (let i = 0; i <= userInput; i++) {
    let stringNumber = i.toString();
    if (stringNumber.includes("3")) {
      return "Won't you be my neighbor?"
    } else if (stringNumber.includes("2")) {
      return "Boop!"
    } else if (stringNumber.includes("1")) {
      return "Beep!"
    } else {
      
    }
  }
}

//User Interface Logic
$(document).ready(function () {
  $("#thereGoes").submit(function (event) {
    event.preventDefault();
    let userInput = parseInt($("#number").val());
    let array = loop(userInput);
    $("#theNeiborhood");
  })
})