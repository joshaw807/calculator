const display = document.querySelector("#display");
// let total = 0; //holds value
const operators = ["+", "-", "*", "/"];

function appendFunction(key) {

  // if(display.value.length >= 9){
  //   return;
  // }

  if (!isNaN(key)) {
    display.value += key;
    return;
  }

  if (operators.includes(key)) {
    const lastChar = display.value.slice(-1);

    // If last character is an operator, replace it with the new one
    if (operators.includes(lastChar)) {
      display.value = display.value.slice(0, -1) + key;
      return;
    }

    // If any operator already exists (but not at the end), do not add another
    if (operators.some((op) => display.value.includes(op))) {
      return;
    }

    // Only add operator if display is not empty
    if (display.value !== "") {
      display.value += key;
    }
    return;
  }

  if (key === ".") {
    const parts = display.value.split(/[+\-*/]/);
    const currentNumber = parts[parts.length - 1];
    if (!currentNumber.includes(".")) {
      display.value += ".";
    }
    return;
  }
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  let operatorFound = null;
  let operatorIndex = null;

  for (let op of operators) {
    if (display.value.includes(op)) {
      operatorIndex = operators.indexOf(op);
      console.log("index :" + operatorIndex);
      operatorFound = operators[operatorIndex];
      console.log("opeartor found: " + operatorFound);
      break;
    }
  }

  if (operatorFound === null) {
    return;
  }

  let [left, right] = display.value.split(operatorFound);

  if (left === "" || right === "") {
    return;
  }

  left = parseFloat(left);
  right = parseFloat(right);

  switch (operatorFound) {
    case "+":
      display.value = left + right;
      break;
    case "-":
      display.value = left - right;
      break;
    case "/":
      if(right === 0){
      }else{
        display.value = left - right;
      }
      break;
    case "*":
      display.value = left * right;
      break;
  }
}
