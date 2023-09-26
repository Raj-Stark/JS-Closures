let value = 23; // In js its value which has type not the variable

value = "Raj"; // Varible can be assigned to a String which is totally fine in js

// !  Number: Represents both integer and floating-point numbers.

let age = 25;
let price = 19.99;
let pi = Math.PI;

// ! String: Represents a sequence of characters enclosed in single, double, or backticks (template literals).

let firstName = "John";
let message = "Hello, world!";
let template = `This is a template literal`;

// ! Boolean: Represents a true or false value.

let isTrue = true;
let isFalse = false;
let isGreater = 10 > 5;

// ! Undefined: Represents a variable that has been declared but has not been assigned a value.

let x; // undefined
let y = undefined;
function foo() {} // returns undefined

// ! Null: Represents the intentional absence of any object or value.

let emptyValue = null;
let person = { name: null, age: 30 };
let result = someFunction(); // result is null

// ! Symbol (ES6): Represents a unique and immutable value, often used as object property keys.

const symbol1 = Symbol("description");
const symbol2 = Symbol("description");
const uniqueKey = Symbol();

// ! BigInt data type to represent arbitrarily large integers. BigInt is used when you need to perform mathematical operations on numbers that are beyond the range of the Number data type.

const bigInt1 = 1234567890123456789012345678901234567890n;
const bigInt2 = BigInt("9876543210987654321098765432109876543210");

// Perform arithmetic operations with BigInt
const sum = bigInt1 + bigInt2;
const product = bigInt1 * bigInt2;

console.log(sum); // Output: 11111111101111111101111111111011111111100n
console.log(product); // Output: 12193263111263526922610109385267507477712222370375980364200n


