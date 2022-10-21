const calculator = document.querySelector('.calculator');
const resultScreen = calculator.querySelector('.result-screen');
const buttons = calculator.querySelector('.buttons');
const numbers = buttons.querySelectorAll('.number');
const operators = buttons.querySelectorAll('.operator');

let numberArray = ['', '']
let activeNumber = 0;
let result = '';
let calculating = true;


numbers.forEach((e) => {
    e.addEventListener('click', e => {
        calculating = true;
        numberArray[activeNumber] += e.target.innerText.toString();
        updateResultScreen();   
    })
})

operators.forEach(e => {
    e.addEventListener('click', e => {
        activeNumber++;
        if (activeNumber >= 2) {
            calculating = false;
            result = add(numberArray[0], numberArray[1]);
            updateResultScreen();
            resetCalculator();
        }

    })
})

function updateResultScreen() {
    resultScreen.textContent = activeNumber < 2 ? numberArray[activeNumber] : result;
}

function resetCalculator() {
    numberArray = ['', ''];
    activeNumber = 0;
    result = '';
}

function getCurrentNum() {
    return numberArray[activeNumber];
}

// Functions
function add(a, b) {
    return Number(a) + Number(b);
}

function subtract(a, b) {
    return a - b;
}

function multiply() {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(func, a, b) {
    return func(a, b);
}

function main() {
    updateResultScreen();
}

main();