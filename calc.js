function add(a, b) {
  if (!numA) {
    result = +a + +b;
  } else {
    result = +a + +numString;
  }
}

function subtract(a, b) {
  if (!numA) {
    result = a - b;
  } else {
    result = a - numString;
  }
}

function multiply(a, b) {
  if (!numA) {
    result = a * b;
  } else {
    result = a * numString;
  }
}

function divide(a, b) {
  if (!numA) {
    result = a / b;
  } else {
    result = a / numString;
  }
}
function operate(operation, a, b) {
  return operation(a, b);
}

let numA = '';
let numB = '';
let result;
let numString = '';
const inputDisplay = document.getElementById('input-display');

let input = document.querySelectorAll('button.button-num');
input.forEach((button) => {
  button.addEventListener('click', () => {
    input = button.value;
      storeInput();
      logToConsole();
   display.textContent = numString;
   
 });
});

let operatorChoice;
const operatorButton = document.querySelectorAll('button.button-operator');
operatorButton.forEach((button) => {
  button.addEventListener('click', () => {
    if (numB || numB === 0) {
      decimalButton.disabled = false;
      solve();
      operatorChoice = button.value;
      inputDisplay.textContent += `${numString} ${operatorChoice} `;
      numString = '';
      display.textContent = result;
      numA = result;
    } else { // allows negative first operand
      operatorChoice = button.value;
      inputDisplay.textContent += `${operatorChoice} `;
    }
  })
});

function pressEquals() {
  if (!operatorChoice && result) {
    display.textContent = result;
    logToConsole();
  } else if (!result) {
    display.textContent = '0';
  } else {
    solve();
    decimalButton.disabled = false;
    display.textContent = result;
    inputDisplay.textContent += `${numString}`;
    numA = result;
    numString = '';
    operatorChoice = '';
    logToConsole();
  }
}

const equalsButton = document.getElementById('equals');
equalsButton.addEventListener ('click', () => {
  pressEquals();
})

function solve() {
switch (operatorChoice) {
  case '+':
    operate(add, numA, numB);
    break;
  case '-':
    operate(subtract, numA, numB);
    break;  
  case '*':
    operate(multiply, numA, numB);
    break;
  case '/':
    operate(divide, numA, numB);
    break;
  }
}

function clear() {
  input = '';
  numString = '';
  numA = '';
  numB = '';
  result = '';
  display.textContent = '0';
  inputDisplay.textContent = ' ';
}

const clearButton = document.getElementById('clear');
clearButton.addEventListener ('click', () => {
  clear();
})

const display = document.querySelector('.calc-display');

const backspaceButton = document.getElementById('del');
backspaceButton.addEventListener ('click', () => {
  backSpace()
})

function backSpace() {
  numString = numString.slice(0, -1)
  result = numString;
  numB = numString;
  if (numString === '') {
  numString = '0';
}
display.textContent = numString;
logToConsole()
}

function storeInput() {
  numString += input;
  if (numB || numB === 0) {
    numB = numString;
    result = numB;
  } else {
    result = numString;
    numB = result;
  }
}

function logToConsole() {
  console.log('number string:' + numString);
  console.log('numA:' + numA);
  console.log('numB:' + numB);
  console.log('result:' + result);
}

const decimalButton = document.querySelector('[data-name="dec"]');
decimalButton.addEventListener('click', () => {
  decimalButton.disabled = true;
});

window.addEventListener('keydown', (e) => {
  if (isFinite(e.key) || e.key === '.') {
    console.log(e.key);
    input = e.key;
    storeInput();
    display.textContent = numString;
  } else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
    if (numB || numB === 0) {
      decimalButton.disabled = false;
      solve();
      operatorChoice = e.key;
      inputDisplay.textContent += `${numString} ${operatorChoice} `;
      numString = '';
      display.textContent = result;
      numA = result;
    } else {
      operatorChoice = e.key;
      inputDisplay.textContent += `${operatorChoice} `;
    }
  } else if (e.code === 'Escape' || e.code === 'Escape') {
    clear();
  } else if (e.code === 'Backspace') {
    backSpace();
  } else if (e.code === 'Enter' || e.code === 'NumpadEnter') {
    pressEquals();
  }
});



