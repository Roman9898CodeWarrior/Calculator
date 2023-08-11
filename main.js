let a = "";
let b = "";
let operator = "";
let calculated = false;
const display = document.querySelector(".currentNumber");

let nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
let signs = ["+", "-", "x", "*", "/"];

function handleNumbers(key) {
  if (b === "" && operator === "") {
    if (a.length <= 11) {
      a += key;
      display.textContent = a;
    }
  } else if (a !== "" && b !== "" && calculated === true && operator === "") {
    a = "";
    b = "";
    calculated = false;
    if (a.length <= 11) {
      a += key;
      display.textContent = a;
    }
  } else if (a !== "" && b !== "" && calculated === true) {
    b = "";
    calculated = false;
    if (b.length <= 11) {
      b += key;
      display.textContent = b;
    }
  } else {
    if (b.length <= 11) {
      b += key;
      display.textContent = b;
    }
  }
}

function handleOperator(key) {
  operator = key;
  display.textContent = operator;
}

function handleCalculation() {
  if (b === "") b = a;
  switch (operator) {
    case "+":
      a = +a + +b;
      break;
    case "-":
      a = a - b;
      break;
    case "*":
      a = a * b;
      break;
    case "x":
      a = a * b;
      break;
    case "/":
      if (b <= 0) {
        display.textContent = "Error";
        a = "";
        b = "";
        operator = "";
      }
      a = a / b;
      break;
  }
  operator = "";
  calculated = true;
  a = Math.round(a * 1000) / 1000;
  display.textContent = a;
}

function handleDelite() {
  a = "";
  b = "";
  operator = "";
  calculated = false;
  display.textContent = "";
}

function handleDeliteLast() {
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
    if (a !== "" && b !== "") {
      handleCalculation();
    }
    handleOperator(key);
  }

  if (key === "Enter" || key === "=") {
    handleCalculation();
  }

  if (key === "Delete" || key === "AC") {
    handleDelite();
  }

  if (key === "Backspace") {
    handleDeliteLast();
  }
}

window.addEventListener("click", (e) => {
  let key = e.target.textContent;
  action(key);
});

window.addEventListener("keydown", (e) => {
  e.preventDefault();
  let key = e.key;
  action(key);
});
