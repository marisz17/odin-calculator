//Basic Math Operations
const add = (a, b) => +a + +b;

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

const insertIntoAString = (button) => {
    if (operatorString) {
        if (button === ".") {
            if (!isDecimal(secondString)) {
                secondString += button; 
                console.log("in");
            }
        } else {
            secondString += button;
        }
        
    } else {
        if (button === ".") {
            if (!isDecimal(firstString)) {
                firstString += button; 
            }
        } else {
            firstString += button;
        }
    }
}

const isDecimal = (string) => {
    return string.includes(".");
};

const convertToHtmlCode = () => {
    switch (operatorString) {
        case "+":
            return String.fromCharCode(43);
            break;
        case "-":
            return String.fromCharCode(8722);
            break;
        case "*":
            return String.fromCharCode(215);
            break;
        case "/":
            return String.fromCharCode(247);
            break
        default:
            return "";
    }
};

const onClickSign = (sign) => {
    if (answerString !== "" && firstString === "" && secondString === "") {
        firstString = answerString;
        operatorString = sign;
        inputOnScreen.textContent = `${firstString} ${convertToHtmlCode()} ${secondString}`;
    } else {

    if (secondString === "" && firstString !== "" && firstString !== "-") {
        operatorString = sign;
        inputOnScreen.textContent = `${firstString} ${convertToHtmlCode()} ${secondString}`;
    } else if (firstString !== "" && firstString !== "-" && secondString !== "-") {
        firstString = `${operate(operatorString, firstString, secondString)}`;
        secondString = "";
        operatorString = sign;
        inputOnScreen.textContent = `${firstString} ${convertToHtmlCode()} ${secondString}`;
    } else if (secondString === "-") {
        operatorString = sign;
        secondString = "";
        inputOnScreen.textContent = `${firstString} ${convertToHtmlCode()} ${secondString}`;
    } else if (firstString === "-") {
        firstString = "";
        operatorString = "";
        inputOnScreen.textContent = `${firstString} ${convertToHtmlCode()} ${secondString}`;

    }
  }
};

const onClickMinus = () => {
    if (answerString !== "" && firstString === "" && secondString === "") {
        firstString = answerString;
        operatorString = "-";
        inputOnScreen.textContent = `${firstString} ${convertToHtmlCode()} ${secondString}`;
    } else {
        if (firstString === "") {
            firstString += "-";
            inputOnScreen.textContent = `${firstString} ${convertToHtmlCode()} ${secondString}`;
        } else if (firstString === "-") {
            firstString = "-";
            inputOnScreen.textContent = `${firstString} ${convertToHtmlCode()} ${secondString}`;
    
        } else if (firstString !== "" && firstString !== "-" && operatorString === "") {
            operatorString = "-";
            inputOnScreen.textContent = `${firstString} ${convertToHtmlCode()} ${secondString}`;
        } else if (operatorString !== "" && secondString === "") {
            secondString += "-";
            inputOnScreen.textContent = `${firstString} ${convertToHtmlCode()} ${secondString}`;
        } else if (secondString !== "-") {
            firstString = `${operate(operatorString, firstString, secondString)}`;
            secondString = "";
            operatorString = "-";
            inputOnScreen.textContent = `${firstString} ${convertToHtmlCode()} ${secondString}`;
        } 
    }
    
};

const onClickEqual = () => {
    let onlyFirsExists = (firstString !== "" && firstString !== "-") 
    && (secondString === "" || secondString === "-");
    inputOnScreen.textContent = "";
    let answerNumberSpan = document.createElement("span");

    if (onlyFirsExists) {
        answerString = firstString;
        outputOnScreen.textContent = "";
        answerNumberSpan.textContent = answerString;
        firstString = "";
        secondString = "";
        operatorString = "";

    } else if (firstString === "") {
        answerNumberSpan.textContent = answerString;
        outputOnScreen.textContent = "";
        firstString = "";
        secondString = "";
        operatorString = "";
    } else if (firstString !== "-") {
        answerString = operate (operatorString, firstString, secondString);
        outputOnScreen.textContent = "";
        answerNumberSpan.textContent = answerString;
        firstString = "";
        secondString = "";
        operatorString = "";
    };

    if (answerString !== "") {
        inputOnScreen.appendChild(answerSpan);
        };
    inputOnScreen.appendChild(answerNumberSpan);
}

// DOM Manupulation declarations
const inputOnScreen = document.querySelector(".input");
const answerSpan = document.createElement("span");
answerSpan.textContent = "ANS = ";
const outputOnScreen = document.querySelector(".answer");
const numberBtns = document.querySelectorAll(".numbers > .rows > *");

let firstString = ``;
let secondString = ``;
let operatorString = ``;
let answerString = ``;

//Numbers Text Content
numberBtns.forEach(item => {
    if (item.id !== "point") {
    item.textContent = item.id;
}
});


//Onclick functions for numbers
numberBtns.forEach(item => {
    if (item.id === "point") {
    item.addEventListener("click", (e) => {
        insertIntoAString(".");
        inputOnScreen.textContent = `${firstString} ${convertToHtmlCode()} ${secondString}`;
    })
} else if (item.id === "00") {
    item.addEventListener("click", (e) => {
        insertIntoAString("00");
        inputOnScreen.textContent = `${firstString} ${convertToHtmlCode()} ${secondString}`;
    })
} else {
    item.addEventListener("click", (e) => {
        insertIntoAString(`${item.id}`);
        inputOnScreen.textContent = `${firstString} ${convertToHtmlCode()} ${secondString}`;
        if (secondString !== "" && secondString !== "-") {
            outputOnScreen.textContent = `${operate (operatorString, firstString, secondString)}`
        }
})
}});


//Onclick functions for other buttons
const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", () => {
    firstString = "";
    secondString = "";
    operatorString = "";
    inputOnScreen.textContent = `${firstString} ${convertToHtmlCode()} ${secondString}`;
    outputOnScreen.textContent = "";
    answerString = "";
}) 
const plusBtn = document.querySelector("#plus");
plusBtn.addEventListener("click", () => {
    onClickSign ("+");   
});
const minusBtn = document.querySelector("#minus");
minusBtn.addEventListener("click", onClickMinus);

const multiplyBtn = document.querySelector("#multiply");
multiplyBtn.addEventListener("click", () => {
    onClickSign ("*");
});
const divideBtn = document.querySelector("#divide");
divideBtn.addEventListener("click", () => {
    onClickSign ("/");
});
const equalBtn = document.querySelector("#equals");
equalBtn.addEventListener("click", onClickEqual);

//
console.log("Marisz & Dallas")