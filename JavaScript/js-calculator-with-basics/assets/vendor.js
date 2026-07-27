const userInput = document.getElementById('input-number');
const multiplyBtn = document.getElementById('btn-multiply');
// ! Add all buttons for homework


const currentCalculationOutput = document.getElementById('current-calculation');
const currentCalculationResult = document.getElementById('current-result');

function outputResult(result, text) {
    currentCalculationOutput.textContent = text;
    currentCalculationResult.textContent = result;
}

