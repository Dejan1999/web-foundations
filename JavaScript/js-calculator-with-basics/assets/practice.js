// alert('My First JavaScript Code! 😎');

// ? Variables (let, const, var)

// Declaration and initialization
let firstString = 'My First String';

let mySecondVariable;

mySecondVariable = 'Dejan';

console.log(firstString);

// Reassignment
firstString = 25;

const myAge = 27;

// myAge = 57;

console.log(myAge);

var city = 'Becej';

console.log(city); 

city = 'Novi Sad';

console.log(city);

// ? Best Practice

// 1. Use camelCase
let myFirstCamelCaseVar = 5;

// 2. Variable names can contain numbers
let top11 = 11;

// 3. Variable names can start with $ or _
let $specialVar;
let _internalValue;

// ! Bad Practice

// 1. Avoid using snake_case in JavaScript
let not_good_idea;

// 2. Using number as first string
// * let 7contines;

// 3. Avoid using kebab-case for variables
// * let my-second-variable;

// 4. Do not use reserved keywords
// * let const;
// *  const let;

// ? JavaScript Operators (+, -, *, /, %, **)

let someNumber = 20;

someNumber = someNumber + 50;

console.log(someNumber); // 70

let square = 2**2;

console.log(square); // 4

someNumber = someNumber + 50 * 3 + 13;

console.log(someNumber); // 233

// ! HOMEWORK:
// 1.
/*
    Create variables with arbitrary names using the allowed camelCase format.
    Use a combination of let and const.
    Print the values of the variables using the console.log() function.
    Try to reassign a CONST variable.
*/

// 2.
/*
    Create 2 variables using let or const (choose which one to use yourself).
    The first variable should store the result of a more complex mathematical operation.
    The second variable should store a description of the mathematical operation you wrote.
*/

// * 1.

const firstTaksVariable = 'I love JS🚀';
console.log (firstTaksVariable);

let anotherTaskVariable = 'Coding is Awesome';
console.log(anotherTaskVariable);

// * 2.

let a = 20;
let operation;

const myOperation = a + 25 - 40 - a / 2 + 5 * 3;
operationStr = 'a + 25 - 40 - a / 2 + 5 * 3';

console.log(myOperation);

console.log(operationStr);


console.log('-------------------');

// ? String Concatenation

let myMathOperation = (a / 10) + (a * 5) - 10;

let myMathOperationStr = '(' + a + ' / 10) + (' + a + ' * 5) - 10'; 

console.log(myMathOperation);

console.log(myMathOperationStr);

// First task
let res = 10;

let firstTaskOperation = 'res + (res * 3) - (10 + res)';

let firstTaskOperationStr = res + ' + (' + res + ' * 3) - (10 + ' + res +')';

console.log(firstTaskOperationStr);

let copyOfFirstTaskOperation = firstTaskOperation;

console.log(firstTaskOperation);

console.log(copyOfFirstTaskOperation);

firstTaskOperation = 555;

console.log(firstTaskOperation);

console.log(copyOfFirstTaskOperation);

firstTaskOperation =  'res + (res * 3) - (10 + res)';

let templateLiteralsVariable = `${res} + (${res} * 3) - (10 + ${res})`;

console.log(templateLiteralsVariable);

// Second Task
let secondTaskOperation = 'res * (15 * res) - (res / 2) + res';

let secondTaskOperationStr = `${res} * (15 * ${res}) - (${res} / 2) + ${res}`;

console.log(secondTaskOperation);

console.log(secondTaskOperationStr);

let goToNextLineStr = `My string can go \nto the next line.`; // \n -> next line

console.log(goToNextLineStr);

// ? FUNCTIONS

function helloWorld(planetName) {
    alert(`Hello Planet ${planetName}`);
}

// helloWorld(`Jupiter`);

// helloWorld(`Mars`);

// helloWorld('Earth');

const result = `Hello JS!`;

function add(number1, number2) {
    const result = number1 + number2;
    console.log(`Testing result variable ${result}`);
    return `Result of add function is: ${result}`;

    // return `Resul of add function is: ${number1+number2}`;
}

console.log(result);

console.log(add(50,100));

console.log(add(3,10));

function printVariableX() {
    console.log(`Testing anotherX variable ${anotherX}`);
} 

let anotherX;

anotherX = 55;

printVariableX();

// ! HOMEWORK
// 1.
/* 
    Create two variables.
    The first one should be a number called userInput
    (assign it any numeric value you want).
    The second variable should be called currentResult
    and should not be assigned any value initially.
    Set the currentResult variable to the value of
    userInput plus some number (e.g. 20).
    In the next 3 lines of code, update the currentResult
    variable using subtraction, multiplication, and division.
    After each operation, print the value of currentResult
    to the console in any format you like, but make sure
    the output starts with the prefix:
    "Current result is: "
    Finally, display currentResult in an alert window
    and print userInput only to the console.
*/

// 2.
/*
    Create a function called square() that raises
    the number passed as a parameter to the power of 2.
    Return the result in the following format:
    "Result is: number"
    Call the function and pass a number as an argument
    (e.g. 5).
*/

// 1. 
let userInput = 7;

let currentResult;

currentResult = userInput + 137;
console.log(`Current result is: ${currentResult}`);

currentResult = currentResult - 45;
console.log(`Current result is: ${currentResult}`);

currentResult = currentResult * 12;
console.log(`Current result is: ${currentResult}`);

currentResult = currentResult / 4;
console.log(`Current result is: ${currentResult}`);

console.log(userInput);
alert(`Current result: ${currentResult}`);

// 2.
function getSquaredNumber(squareNumber) {
    return `Result is: ${squareNumber**2}`;
}

console.log(getSquaredNumber(5));