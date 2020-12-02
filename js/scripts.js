//Business Logic
let loop = function(userInput) {
  let array = [];
  for (let i = 0; i <= userInput; i++) {
    let stringNumber = i.toString();
    if (stringNumber.includes("3")) {
      array.push("Won't you be my neighbor?");
    } else if (stringNumber.includes("2")) {
      array.push("Boop!");
    } else if (stringNumber.includes("1")) {
      array.push("Beep!");
    } else {
      array.push(stringNumber);
    }
  }
  return array;
}

//User Interface Logic
$(document).ready(function () {
  $("#thereGoes").submit(function (event) {
    event.preventDefault();
    let userInput = parseInt($("#number").val());
    let resultArray = loop(userInput).join(', ');
    $("#theNeighborhood").text(`Mr. Roboger says: ${resultArray}`);
  })
})