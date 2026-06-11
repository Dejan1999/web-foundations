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

const mathResult = (123 * 4) - (10 * 2) / 3 + 40;

let mathDescription = '(123 * 4) - (10 * 2) / 3 + 40';

console.log(mathResult);
console.log(mathDescription);