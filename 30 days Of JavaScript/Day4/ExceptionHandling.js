try {
    let lastName = 'Yetayeh'
    let fullName = firstName + ' ' + lastName
  } catch (err) {
    console.log(err.name)
    console.log(err.message);
  }finally{
    console.log("Any case ");
  }

  console.log("object After");

//   throw 'Error2' // generates an exception with a string value
// throw 42 // generates an exception with the value 42
// throw trues // generates an exception with the value true
throw new Error('Required') // generates an error object with the message of Required


// Error Types
// ReferenceError: An illegal reference has occurred. A ReferenceError is thrown if we use a variable that has not been declared.
let firstName = 'Asabeneh'
let fullName = firstName + ' ' + lastName

console.log(fullName)
// Uncaught ReferenceError: lastName is not defined
// at <anonymous>:2:35

// SyntaxError: A syntax error has occurred
// let square = 2 x 2;
console.log(square)

// console.log('Hello, world");

// Uncaught SyntaxError: Unexpected identifier
// TypeError: A type error has occurred
let num = 10
console.log(num.toLowerCase())
// Uncaught TypeError: num.toLowerCase is not a function
// at <anonymous>:2:17