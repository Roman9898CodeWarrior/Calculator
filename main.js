
let a = "";
let b = "";
let operator = "";
let calculated = false;
const display = document.querySelector('.currentNumber')


let nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
let signs = ['+', '-', 'x', '*', '/'];

function handleNumbers(key) {
  if (b === '' & operator === '') {
    if (a.length <= 11) {
      a += key;
      display.textContent = a;
    }
  } else if (a !== '' && b !== '' && calculated == true && operator === '') {
    a = "";
    b = "";
    calculated = false;
    if (a.length <= 11) {
      a += key;
      display.textContent = a;
    }
  } else if (a !== '' && b !== '' && calculated == true) {
    if (b.length <= 11) {
      b = ''
      b += key;
      calculated = false;
      display.textContent= b;
    } 
  } else {
    if (b.length <= 11) {
      b += key;
      display.textContent= b;
    }
  }
}

function handleOperator(key) {
  operator = key;
  display.textContent = operator;
}

function handleCalculation() {
  if (b === '') b = a;
    switch(operator) {
      case '+':
        a = (+a) + (+b);
        break;
      case '-':
        a = a - b;
        break
      case 'x':
        a = a * b;
        break
      case '*':
        a = a * b;
        break
      case '/':
        if (b <= 0) {
          display.textContent = 'Error'
          a = "";
          b = "";
          operator = "";
        }
        a = a / b;
        break
    }
    operator = '';
    calculated = true;
    a = Math.round(a * 1000) / 1000;
    display.textContent = a;
}

function handleDelite() {
  display.textContent = ''
  a = "";
  b = "";
  operator = "";
  calculated = false;
}

function handleDelitLast() {
  if (display.textContent === a) {
    a = a.slice(0, -1);
    display.textContent = a;
  }
  if (display.textContent === b) {
    b = b.slice(0, -1);
    display.textContent = b;
  }
}

function action(key) {
  if (nums.includes(key)) {
    handleNumbers(key);
  }

  if (signs.includes(key)) {
    handleOperator(key);
  }

  if (key === '=' || key === 'Enter') {
    handleCalculation();
  }
    
  
  if (key === 'AC' || key === 'Delete') {
    handleDelite()
  }

  if (key === 'Backspace') {
    handleDelitLast()
  }
}



window.addEventListener('click', handleMouseClick)

function handleMouseClick(e) {
  let key = e.target.textContent;

  action(key)
}



window.addEventListener("keydown", handleKeyPress);

function handleKeyPress(e) {
  e.preventDefault();
  let key = e.key;

  action(key)
}









