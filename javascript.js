//Basic Math Operations
const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

let firstNumber;
let secondNumber;
let operator;

const operate = (operator, firstNumber, secondNumber) => {
    switch (operator) {
        case "+":
            return add(firstNumber, secondNumber);
            break;
        case "-":
            return subtract(firstNumber, secondNumber);
            break;
        case "*":
            return multiply(firstNumber, secondNumber);
            break;
        case "/":
            return divide(firstNumber, secondNumber)
            break
    }
};

console.log(operate("-", 6, 2));


// DOM Manupulation

const numberBtns = document.querySelectorAll(".numbers > .rows > *");
numberBtns.forEach(item => {
    if (item.id !== "point") {
    item.textContent = item.id;
} else {item.textContent = "."}
})
console.log(numberBtns);