let number1 = 10;
let number2 = 5;
let message = "";

let sum = number1 + number2;
let product = number1 * number2;

if (sum > 12) {
  message = "The sum is greater than 12.";
} else {
  message = "The sum is 12 or less.";
}

let loopText = "";
for (let i = 1; i <= 3; i++) {
  loopText += "Loop count: " + i + "<br>";
}
document.getElementById("output").innerHTML =
  "Number 1: " +
  number1 +
  "<br>" +
  "Number 2: " +
  number2 +
  "<br>" +
  "Sum: " +
  sum +
  "<br>" +
  "Product: " +
  product +
  "<br>" +
  message +
  "<br><br>" +
  loopText;
