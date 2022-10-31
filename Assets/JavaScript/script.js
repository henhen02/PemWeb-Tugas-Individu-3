const calculator = {
    displayResult: '0',
    operators: null,
    firstNum: null,
    secondNum: false
};

function inpNumber(num) {
    if (calculator.displayResult === '0'){
        calculator.displayResult = num;
    } else {
        calculator.displayResult += num;
    }
}

function updateDisplayResult() {
    document.getElementById('result').innerText = calculator.displayResult;
}

function clearDisplayResult() {
    calculator.displayResult = '0';
    calculator.operators = null;
    calculator.firstNum = null;
    calculator.secondNum = false;
}

function inversNum() {
    if (calculator.displayResult === '0'){
        return;
    } else {
        calculator.displayResult = calculator.displayResult * -1; 
    }
}

function count() {
    let result;
    if (calculator.operators === '+'){
        result = parseInt(calculator.firstNum) + parseInt(calculator.displayResult);
    } else {
        result = parseInt(calculator.firstNum) - parseInt(calculator.displayResult);
    }
    const history = {
        number1: calculator.firstNum,
        number2: calculator.displayResult,
        op: calculator.operators,
        result: result 
    }
    putHistory(history);
    calculator.displayResult = result;
    printHistoryData();
}

function opHandler(operator) {
    if (!calculator.secondNum){
        calculator.operators = operator;
        calculator.secondNum = true;
        calculator.firstNum = calculator.displayResult;
        calculator.displayResult = '0';
    } else {
        alert('Tidak bisa memasukkan dua operator!');
    }
}

const buttons = document.querySelectorAll('.button');

for (let button of buttons){
    button.addEventListener('click', function(event){
        const target = event.target;
        if (target.classList.contains('ce')){
            clearDisplayResult();
            updateDisplayResult();
            return;
        }
        if (target.classList.contains('invers')){
            inversNum();
            updateDisplayResult();
            return;
        }
        if (target.classList.contains('equals')){
            count();
            updateDisplayResult();
            return;
        }
        if (target.classList.contains('op')){
            opHandler(target.innerText);
            updateDisplayResult();
            return;
        }
        
        inpNumber(target.innerText);
        updateDisplayResult();
    })
}