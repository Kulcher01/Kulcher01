let displayValue = '';
let operator = '';
let firstOperand = '';
let secondOperand = '';

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function appendOperator(op) {
    if (displayValue !== '') {
        firstOperand = displayValue;
        operator = op;
        displayValue = '';
        updateDisplay();
    }
}

function appendDot() {
    if (!displayValue.includes('.')) {
        displayValue += '.';
        updateDisplay();
    }
}

function clearDisplay() {
    displayValue = '';
    operator = '';
    firstOperand = '';
    secondOperand = '';
    updateDisplay();
}

function calculate() {
    if (firstOperand !== '' && operator !== '') {
        secondOperand = displayValue;
        let result = 0;
        switch (operator) {
            case '+':
                result = parseFloat(firstOperand) + parseFloat(secondOperand);
                break;
            case '-':
                result = parseFloat(firstOperand) - parseFloat(secondOperand);
                break;
            case '*':
                result = parseFloat(firstOperand) * parseFloat(secondOperand);
                break;
            case '/':
                result = parseFloat(firstOperand) / parseFloat(secondOperand);
                break;
        }
        displayValue = result;
        firstOperand = '';
        operator = '';
        secondOperand = '';
        updateDisplay();
    }
}

function updateDisplay() {
    const display = document.getElementById('display');
    display.value = displayValue;
}