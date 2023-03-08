var form = document.getElementById("calculator-form");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  var num1 = Number(document.getElementById("num1").value);
  var num2 = Number(document.getElementById("num2").value);
  var operator = document.getElementById("operator").value;
  var result = 0;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      alert("Invalid operator");
      break;
  }

  document.getElementById("result").innerHTML = "Result: " + result;
});
