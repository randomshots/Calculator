//1. Dark mode part

//dark mode state
let darkModeState = false;
//variable that modifies the "dark-mode" class related variables
const darkModeClass = document.querySelector(".dark-mode");
//variable that modifies the "calculator" class related variables, mainly buttons
const calculatorButtons = document.querySelectorAll(".calculator-button");
darkModeClass.addEventListener('click', () => {
    if (darkModeState===false) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        darkModeClass.style.borderColor = "white"
        darkModeState = true;
        darkModeClass.textContent = "Light Mode";
        calculatorButtons.forEach((button)=>{
            button.style.backgroundColor = "black";
            button.style.color = "white";
        })
    } else if (darkModeState===true) {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        darkModeClass.style.borderColor = "black"
        darkModeState = false;
        darkModeClass.textContent = "Dark Mode";
        calculatorButtons.forEach((button)=>{
            button.style.backgroundColor = "white";
            button.style.color = "black";
        })  
    }
})

//2. Calculator Part
//numbers declaration
const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");

//operators declaration
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const equal = document.getElementById("equal");
const clear = document.getElementById("clear");

//calculator display variable
const calculatorDisplay = document.getElementById("calculatorDisplay")

//result string for the calculator display
let resultString = "";
//initialized to false first, ensures that there are no leading zeroes(i.e. no zeroes before first non-zero digit). Made true when the first non-zero digit is present in the string
let zeroBool = false;

//latest number to be used before an operation
let num = 0;
//latest operator to be used before an operation
let op = '';

//ensures that when a number is entered after the equal button is pressed, it appears rather than the digit being appended to the existing string
let equalPressed = false;

zero.addEventListener('click', () => {
    if (zeroBool===true) {
        const isAllZeros = str => str.length > 0 && [...str].every(char => char === '0');
        if (equalPressed) {
            zeroBool = false;
            resultString = "0";
            num = 0;
            op = '';
            resultString = '0';
            equalPressed = false;
        } else {
            if ((resultString.length===0 || isAllZeros(resultString))) resultString = '0';
            else (resultString = resultString + '0');
        }
        calculatorDisplay.textContent = resultString;
    }
})

one.addEventListener('click', () => {
    if (zeroBool===false) zeroBool = true;
    const isAllZeros = str => str.length > 0 && [...str].every(char => char === '0');
    if (equalPressed) {
            zeroBool = false;
            resultString = "0";
            num = 0;
            op = '';
            resultString = '1';
            equalPressed = false;
    } else {
        if ((resultString.length===0 || isAllZeros(resultString))) resultString = '1';
        else (resultString = resultString + '1');
    }
    calculatorDisplay.textContent = resultString;
})

two.addEventListener('click', () => {
    if (zeroBool===false) zeroBool = true;
    const isAllZeros = str => str.length > 0 && [...str].every(char => char === '0');
    if (equalPressed) {
            zeroBool = false;
            resultString = "0";
            num = 0;
            op = '';
            resultString = '2';
            equalPressed = false;
    } else {
        if ((resultString.length===0 || isAllZeros(resultString))) resultString = '2';
        else (resultString = resultString + '2');
    }
    calculatorDisplay.textContent = resultString;
})

three.addEventListener('click', () => {
    if (zeroBool===false) zeroBool = true;
    const isAllZeros = str => str.length > 0 && [...str].every(char => char === '0');
    if (equalPressed) {
            zeroBool = false;
            resultString = "0";
            num = 0;
            op = '';
            resultString = '3';
            equalPressed = false;
    } else {
        if ((resultString.length===0 || isAllZeros(resultString))) resultString = '3';
        else (resultString = resultString + '3');
    }
    calculatorDisplay.textContent = resultString;
})

four.addEventListener('click', () => {
    if (zeroBool===false) zeroBool = true;
    const isAllZeros = str => str.length > 0 && [...str].every(char => char === '0');
    if (equalPressed) {
            zeroBool = false;
            resultString = "0";
            num = 0;
            op = '';
            resultString = '4';
            equalPressed = false;
    } else {
        if ((resultString.length===0 || isAllZeros(resultString))) resultString = '4';
        else (resultString = resultString + '4');
    }
    calculatorDisplay.textContent = resultString;
})

five.addEventListener('click', () => {
    if (zeroBool===false) zeroBool = true;
    const isAllZeros = str => str.length > 0 && [...str].every(char => char === '0');
    if (equalPressed) {
        zeroBool = false;
        resultString = "0";
        num = 0;
        op = '';
        resultString = '5';
        equalPressed = false;
    } else {
        if ((resultString.length===0 || isAllZeros(resultString))) resultString = '5';
        else (resultString = resultString + '5');
    }
    calculatorDisplay.textContent = resultString;
})

six.addEventListener('click', () => {
    if (zeroBool===false) zeroBool = true;
    const isAllZeros = str => str.length > 0 && [...str].every(char => char === '0');
    if (equalPressed) {
        zeroBool = false;
        resultString = "0";
        num = 0;
        op = '';
        resultString = '6';
        equalPressed = false;
    } else {
        if ((resultString.length===0 || isAllZeros(resultString))) resultString = '6';
        else (resultString = resultString + '6');
    }
    calculatorDisplay.textContent = resultString;
})

seven.addEventListener('click', () => {
    if (zeroBool===false) zeroBool = true;
    const isAllZeros = str => str.length > 0 && [...str].every(char => char === '0');
    if (equalPressed) {
        zeroBool = false;
        resultString = "0";
        num = 0;
        op = '';
        resultString = '7';
        equalPressed = false;
    } else {
        if ((resultString.length===0 || isAllZeros(resultString))) resultString = '7';
        else (resultString = resultString + '7');
    }
    calculatorDisplay.textContent = resultString;
})

eight.addEventListener('click', () => {
    if (zeroBool===false) zeroBool = true;
    const isAllZeros = str => str.length > 0 && [...str].every(char => char === '0');
    if (equalPressed) {
        zeroBool = false;
        resultString = "0";
        num = 0;
        op = '';
        resultString = '8';
        equalPressed = false;
    } else {
        if ((resultString.length===0 || isAllZeros(resultString))) resultString = '8';
        else (resultString = resultString + '8');
    }
    calculatorDisplay.textContent = resultString;
})

nine.addEventListener('click', () => {
    if (zeroBool===false) zeroBool = true;
    const isAllZeros = str => str.length > 0 && [...str].every(char => char === '0');
    if (equalPressed) {
        zeroBool = false;
        resultString = "0";
        num = 0;
        op = '';
        resultString = '9';
        equalPressed = false;
    } else {
        if ((resultString.length===0 || isAllZeros(resultString))) resultString = '9';
        else (resultString = resultString + '9');
    }
    calculatorDisplay.textContent = resultString;
})


clear.addEventListener('click', () => {
    zeroBool = false;
    resultString = "0";
    num = 0;
    op = '';
    calculatorDisplay.textContent = resultString;
})

plus.addEventListener('click', () => {
    if (equalPressed===true) {
        equalPressed = false;
        num = num;
        op = '+';
    } else {
        let currNum = Number(resultString);
        if (op==='') {
            num = currNum;
            op = '+';
        } else {
            if (op==='+') {
                num += currNum;
                op = '+';
            } else if (op==='-') {
                num -= currNum;
                op = '+';
            } else if (op==='*') {
                num *= currNum;
                op = '+';
            } else if (op==='/') {
                num /= currNum;
                op = '+';
            }
        }
    }
    resultString = '0';
    calculatorDisplay.textContent = num;
})

minus.addEventListener('click', () => {
    if (equalPressed===true) {
        equalPressed = false;
        num = num;
        op = '-';
    } else {
        let currNum = Number(resultString);

        if (op==='') {
            num = currNum;
            op = '-';
        } else {
            if (op==='+') {
                num += currNum;
                op = '-';
            } else if (op==='-') {
                num -= currNum;
                op = '-';
            } else if (op==='*') {
                num *= currNum;
                op = '-';
            } else if (op==='/') {
                num /= currNum;
                op = '-';
            }
        }
    }
    resultString = '0';
    calculatorDisplay.textContent = num;
    
})

multiply.addEventListener('click', () => {
    if (equalPressed===true) {
        equalPressed = false;
        num = num;
        op = '*';
    } else {
        let currNum = Number(resultString);
        if (op==='') {
            num = currNum;
            op = '*';
        } else {
            if (op==='+') {
                num += currNum;
                op = '*';
            } else if (op==='-') {
                num -= currNum;
                op = '*';
            } else if (op==='*') {
                num *= currNum;
                op = '*';
            } else if (op==='/') {
                num /= currNum;
                op = '*';
            }
        }
    }
    resultString = '0';
    calculatorDisplay.textContent = num;
})

divide.addEventListener('click', () => {
    if (equalPressed===true) {
        equalPressed = false;
        num = num;
        op = '/';
    } else {
        let currNum = Number(resultString);
        if (op==='') {
            num = currNum;
            op = '/';
        } else {
            if (op==='+') {
                num += currNum;
                op = '/';
            } else if (op==='-') {
                num -= currNum;
                op = '/';
            } else if (op==='*') {
                num *= currNum;
                op = '/';
            } else if (op==='/') {
                num /= currNum;
                op = '/';
            }
        }
    }
    resultString = '0';
    calculatorDisplay.textContent = num;
})

equal.addEventListener('click', () => {
    equalPressed = true;
    let currNum = Number(resultString);
    if (op==='') {
        calculatorDisplay.textContent = currNum;
        equalPressed = false;
    } else {
        if (op==='+') {
            num += currNum;
        } else if (op==='-') {
            num -= currNum;
        } else if (op==='*') {
            num *= currNum;
        } else if (op==='/') {
            num /= currNum;
        }
        calculatorDisplay.textContent = num
    }
})