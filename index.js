const numbers = document.querySelectorAll('.number-btn');
const operators = document.querySelectorAll('.operator-btn');
const equal = document.getElementById('equal-btn');

const input = document.getElementById('input-field');
const del = document.getElementById('del-btn');
const clr = document.getElementById('clr-btn');

input.setAttribute('readonly', 'true');

numbers.forEach((button) => {
    button.addEventListener('click', () => {
        if (!input.value.includes('ERROR')) {
            input.value += button.textContent;
        }     
    });
});


let operation = '';
let firstNumber = 0;
let secondNumber = 0;
operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        if (input.value !== '' && !input.value.includes('ERROR')) {
            firstNumber = Number(input.value);
        }
        operation = operator.textContent;
        input.value = '';
    });
});

equal.addEventListener('click', () => {
    secondNumber = Number(input.value);

    if (firstNumber == 0 ) {
        input.value = '';
    }
    else if (isNaN(firstNumber) || isNaN(secondNumber)) {
        input.value = 'ERROR!';
    }
    else {
        calculate(operation, firstNumber, secondNumber);
        operation = '';
        firstNumber = 0;
        secondNumber = 0;
    }
});


function calculate(operation, firstNumber, secondNumber) {
    let result;
    switch (operation) {
        case '+':
            result  = firstNumber + secondNumber;
            break;
        case '-':
            result  = firstNumber - secondNumber;
            break;
        case '*':
            result  = firstNumber * secondNumber;
            break;
        case '/':
            result = firstNumber / secondNumber;
            break;
        default:
            result  = 'ERROR!';
            break;    
    }
    result = Math.round(result * 10000) / 10000;
    input.value = result.toString();    
}


del.addEventListener('click', () => {
    input.value = input.value.slice(0, -1);
});

clr.addEventListener('click', () => {
    input.value = '';
});

