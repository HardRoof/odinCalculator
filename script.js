function sum(firstValue,secondValue) {
  result = parseFloat(firstValue) + parseFloat(secondValue)
  return result
};

function subtract(firstValue,secondValue) {
  result = parseFloat(firstValue) - parseFloat(secondValue)
  return result
};

function multiply(firstValue,secondValue) {
  result = parseFloat(firstValue) * parseFloat(secondValue)
  return result
};

function divide(firstValue,secondValue) {
  result = parseFloat(firstValue) / parseFloat(secondValue)
  return result
};

//Create a new function operate that
// takes an operator and 5 numbers and then calls one of the above functions on the numbers.

function operate(firstValue,operation,secondValue) {
  if (operation == '+') {
    return bottomDisplay.textContent = sum(firstValue,secondValue)
  }
  else if (operation == "-") {
    return bottomDisplay.textContent = subtract(firstValue,secondValue)
  }
  else if (operation == "×") {
    return bottomDisplay.textContent = multiply(firstValue,secondValue)
  }
  else if (operation == "÷") {
    return bottomDisplay.textContent = divide(firstValue,secondValue)
  }
}

//UI

const numbers = document.querySelectorAll(".middle button")
const topDisplay = document.querySelector("#topDisplay")
const bottomDisplay = document.querySelector("#bottomDisplay")
clicked = false
firstValue = 0
secondValue = 0
numbers.forEach((button) => {
  button.addEventListener('click', function saveFirstNumber(e) {
    if (clicked == false) {
      a = bottomDisplay.textContent += e.target.innerText
      firstValue = a
    }  
    if (clicked == true) {
      b = bottomDisplay.textContent += e.target.innerText
      secondValue = b
    }
  })
})

const operator = document.querySelectorAll(".rightSide button")
operator.forEach((button) => {
  button.addEventListener('click', function saveOperator(e) {
    clicked = true;
    bottomDisplay.textContent = '';
    operation = e.target.innerText;
  })
});

const equal = document.querySelector(".btnEqual")
equal.addEventListener("click", fEqual)
function fEqual(){
  clicked = false;
  firstValue = operate(firstValue,operation,secondValue)
}


const clear = document.querySelector(".top #idClear")
clear.addEventListener("click", () => {
  clicked = false
  firstValue = bottomDisplay.textContent = ''
  secondValue = bottomDisplay.textContent = ''
})

