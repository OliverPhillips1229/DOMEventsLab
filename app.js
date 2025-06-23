/*
    User Stories:
    As a user, I want to be able to select numbers so that I can perform operations with them.
    As a user, I want to be able to add two numbers together.
    As a user, I want to be able to subtract one number from another.
    As a user, I want to be able to multiply two numbers together.
    As a user, I want to be able to divide one number by another.
    As a user, I want to be able to see the output of the mathematical operation.
    As a user, I want to be able to clear all operations and start from 0.

*/

/*-------------------------------- Constants --------------------------------*/
const display = document.querySelector('.display');

/*-------------------------------- Variables --------------------------------*/
let firstOperand = '';
let secondOperand = '';
let operator = '';
let justCalculated = false;  // Flag to reset input after showing result

/*------------------------ Cached Element References ------------------------*/
const numberButtons = document.querySelectorAll('.button.number');
const operatorButtons = document.querySelectorAll('.button.operator');
const clearButton = document.querySelector('.button.operator:nth-child(1)');
const equalsButton = document.querySelector('.button.equals');

/*----------------------------- Event Listeners -----------------------------*/
numberButtons.forEach(button => {
  button.addEventListener('click', showNum);
});
operatorButtons.forEach(button => {
  if (button.innerText === 'C') return;
  button.addEventListener('click', showOp);
});
clearButton.addEventListener('click', clearAll);
equalsButton.addEventListener('click', showResult);

/*-------------------------------- Functions --------------------------------*/
function showNum(event) {
  const clickedNumber = event.target.innerText;         // Step 1: Get the number clicked

  if (justCalculated) {
    // After result is shown, clear state for new calculation
    firstOperand = '';
    operator = '';
    secondOperand = '';
    justCalculated = false;
  }

  if (operator === '') {
    firstOperand += clickedNumber;                      // Build first operand
    display.innerText = firstOperand;                   // Show it
  } else {
    secondOperand += clickedNumber;                     // Build second operand
    display.innerText = secondOperand;                  // Show it
  }
}

function showOp(event) {
  const clickedOperator = event.target.innerText;       // Step 1: Get the operator clicked
  operator = clickedOperator;                           // Step 2: Save for later
  display.innerText = '';                               // Step 3: Clear display
}

function showResult() {
  const num1 = parseFloat(firstOperand);
  const num2 = parseFloat(secondOperand);
  let result;

  if (operator === '+') {
    result = num1 + num2;
  } else if (operator === '-') {
    result = num1 - num2;
  } else if (operator === '/') {
    result = num1 / num2;
  } else if (operator === '*') {
    result = num1 * num2;
  }

  display.innerText = result;
  firstOperand = result.toString();
  secondOperand = '';
  operator = '';
  justCalculated = true;
}

function clearAll() {
  // Reset all state
  firstOperand = '';
  secondOperand = '';
  operator = '';
  justCalculated = false;

  // Clear the display
  display.innerText = '';
}
