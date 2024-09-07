const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');
const zero = document.getElementById('0');
const clear = document.getElementById('cls');
const add = document.getElementById('add');

let result = document.getElementById('result');
let currentNumber = '';
let previousNumber = '';
let operator = '';

function updateResult() {
    result.innerHTML = currentNumber || previousNumber || '0';
}

one.addEventListener('click', function() {
    currentNumber += '1';
    updateResult();
});

two.addEventListener('click', function() {
    currentNumber += '2';
    updateResult();
});

three.addEventListener('click', function() {
    currentNumber += '3';
    updateResult();
});

four.addEventListener('click', function() {
    currentNumber += '4';
    updateResult();
});

five.addEventListener('click', function() {
    currentNumber += '5';
    updateResult();
});

six.addEventListener('click', function() {
    currentNumber += '6';
    updateResult();
});

seven.addEventListener('click', function() {
    currentNumber += '7';
    updateResult();
});

eight.addEventListener('click', function() {
    currentNumber += '8';
    updateResult();
});

nine.addEventListener('click', function() {
    currentNumber += '9';
    updateResult();
});

zero.addEventListener('click', function() {
    currentNumber += '0';
    updateResult();
});

clear.addEventListener('click', function() {
    currentNumber = '';
    previousNumber = '';
    operator = '';
    updateResult();
});

add.addEventListener('click', function() {
    if (currentNumber === '') return;  // Avoid adding if no number is entered

    if (previousNumber === '') {
        previousNumber = currentNumber;
    } else if (operator) {
        previousNumber = String(Number(previousNumber) + Number(currentNumber));
    }

    operator = '+';
    currentNumber = '';
    updateResult();
});
