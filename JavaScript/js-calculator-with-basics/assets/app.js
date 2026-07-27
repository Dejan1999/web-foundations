const defaultResult = 0;
let currentResult = defaultResult;
let logOfOperations = [];

// ! Getting values from input field
function getUserNumberInput() {
    return parseInt(userInput.value);
}

// ! Function for creating calculations 
function writeOutput(operator, resultBeforeCalculation, calculationNumber) {
    const calculationDescription = `${resultBeforeCalculation} ${operator} ${calculationNumber}`; // '5 + 10'
    outputResult(currentResult, calculationDescription);
}

// ! Function to write every log in this form: 'MULTIPLY', initialResult, enteredNumber, currentResult.
function writeToLog(typeOfOperation, initialResult, enteredNumber, currentResult) {
    const logEntry = {
        operation: typeOfOperation,
        initialResult: initialResult,
        enteredNumber: enteredNumber,
        currentResult: currentResult
    }
    logOfOperations.push(logEntry);
    console.log(logOfOperations);
}

// ? Multiply
function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    // currentResult = currentResult * enteredNumber;
    currentResult *= enteredNumber;
    writeOutput('*', initialResult, enteredNumber);
    writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult)
}

/**
 * TODO rest of operations for homework
*/

multiplyBtn.addEventListener('click', multiply);