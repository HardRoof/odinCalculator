function sum(a,b) {
  result = a + b
  return result
};

function subtract(a,b) {
  result = a - b
  return result
};

function multiply(a,b) {
  result = a * b
  return result
};

function divide(a,b) {
  result = a / b
  return result
};

//Create a new function operate that
// takes an operator and 5 numbers and then calls one of the above functions on the numbers.

function operate(operation,a,b) {
  if (operation == 'sum') {
    return console.log(sum(a,b))
  }
  else if (operation == 'subtract') {
    return console.log(subtract(a,b))
  }
  else if (operation == 'multiply') {
    return console.log(multiply(a,b)) 
  }
  else if (operation == 'divide') {
    return console.log(divide(a,b))
  }
}

operate("sum",5,4)
operate("subtract",5,4)
operate("multiply",5,4)
operate("divide",5,4)