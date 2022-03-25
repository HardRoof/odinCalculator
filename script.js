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
  if (secondValue == 0){
    return result = "Not a number"
  }
  result = parseFloat(firstValue) / parseFloat(secondValue)
  return result
};

//Create a new function operate that
// takes an operator and 5 numbers and then calls one of the above functions on the numbers.
function operate(firstValue,operation,secondValue) {
  if (operation == '+') {
    return myArray[0] = sum(firstValue,secondValue)
  }
  else if (operation == "-") {
    return myArray[0] = subtract(firstValue,secondValue)
  }
  else if (operation == "×") {
    return myArray[0] = multiply(firstValue,secondValue)
  }
  else if (operation == "÷") {
    return myArray[0] = divide(firstValue,secondValue)
  }
}

//UI

const numbers = document.querySelectorAll(".middle button")
const topDisplay = document.querySelector("#topDisplay")
const bottomDisplay = document.querySelector("#bottomDisplay")
clicked = false
clean = true
myArray = []
let b
numbers.forEach((button) => {
  button.addEventListener('click', function saveNumber(e) {
    if (clicked == false) {
      if (clean == false) {
        bottomDisplay.textContent = ''
        myArray = []
        clean = true
      }
      a = bottomDisplay.textContent += e.target.innerText
      firstValue = a
    }  
    if (clicked == true) {
      if (clean == true) {
        bottomDisplay.textContent = ''
        clean = false
      }
      if (clean == false) {
        b = bottomDisplay.textContent += e.target.innerText
        secondValue = b
        if (typeof myArray[0] === "undefined") {
          operate(firstValue,operation,secondValue)
        }
        else {
          operate(myArray[0],operation,secondValue)
        }
      }
    }
  })
})

const operator = document.querySelectorAll(".rightSide button")
operator.forEach((button) => {
  button.addEventListener('click', function saveOperator(e) {
    clicked = true;
    operation = e.target.innerText;
    decimalPoint.disabled = false;
    if (typeof b != "undefined")
      clean = true;
      if (myArray.length != 0) {
        bottomDisplay.textContent = myArray[0]
      }
  })
});

const equal = document.querySelector(".btnEqual")
equal.addEventListener("click", fEqual)
function fEqual(){
  clicked = false;
  clean = false
  decimalPoint.disabled = false;
  bottomDisplay.textContent = myArray[0]
}


const clear = document.querySelector(".top #idClear")
clear.addEventListener("click", () => {
  clicked = false
  decimalPoint.disabled = false;
  firstValue = bottomDisplay.textContent = ''
  secondValue = bottomDisplay.textContent = ''
  myArray = []
})

const decimalPoint = document.getElementById("decimalPoint")
decimalPoint.addEventListener("click", () => {
  decimalPoint.disabled = true;
})
decimalPoint.disabled = false;

