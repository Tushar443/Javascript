//scope.js
let a = 'JavaScript' // is a global scope it will be found anywhere in this file
let b = 10 // is a global scope it will be found anywhere in this file
function letsLearnScope() {
  console.log(a, b) // JavaScript 10, accessible
  if (true) {
    let a = 'Python'
    var b = 100
    console.log(a, b) // Python 100
  }
  console.log(a, b)  // JavaScript 10
}
letsLearnScope()
console.log(a, b) // JavaScript 10, accessible