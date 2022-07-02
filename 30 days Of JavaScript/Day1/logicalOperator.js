// && ampersand operator example

const check = 4 > 3 && 10 > 5         // true && true -> true
const check = 4 > 3 && 10 < 5         // true && false -> false
const check = 4 < 3 && 10 < 5         // false && false -> false

// || pipe or operator, example

const check = 4 > 3 || 10 > 5         // true  || true -> true
const check = 4 > 3 || 10 < 5         // true  || false -> true
const check = 4 < 3 || 10 < 5         // false || false -> false

//! Negation examples

let check = 4 > 3                     // true
let check = !(4 > 3)                  //  false
let isLightOn = true
let isLightOff = !isLightOn           // false
let isMarried = !false                // true

// ####### pre and post increment and decrement

let count = 0
console.log(++count)        // 1
console.log(count)          // 1

let count = 0
console.log(count++)        // 0
console.log(count)          // 1

let count = 0
console.log(--count) // -1
console.log(count)  // -1


let count = 0
console.log(count--) // 0
console.log(count)   // -1

// ######### Ternary operator

let isRaining = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')
isRaining = false

isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.') 

// #### POP-UPs ####

alert('Welcome to 30DaysOfJavaScript')


  let number = prompt('Enter number', 'number goes here')
console.log(number)


const agree = confirm('Are you sure you like to delete? ')
console.log(agree) // result will be true or false based on what you click on the dialog box