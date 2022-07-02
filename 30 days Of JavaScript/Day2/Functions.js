function sumall(){
    let sum = 0;
    for (let i = 0;i<arguments.length;i++){
        sum+=arguments[i];
    }
    console.log(arguments);
    console.log(sum);
}

sumall(1,2,3,4)


// #### Arrow Function

// Let us access the arguments object
​
const sumAllNums = (...args) => {
 // console.log(arguments), arguments object not found in arrow function
 // instead we use a parameter followed by spread operator (...)
 console.log(args)
}

sumAllNums(1, 2, 3, 4)
// [1, 2, 3, 4]

// function declaration
​
// const sumAllNums = (...args) => {
//   let sum = 0
//   for (const element of args) {
//     sum += element
//   }
//   return sum
// }

console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173


// ##### Anonymous function 

const anonymousFun = function() {
    console.log(
      'I am an anonymous function and my value is stored in anonymousFun'
    )
  }

  
// Function expression
const square = function(n) {
    return n * n
  }
  
  console.log(square(2)) // -> 4


//   ### self invoking function 

(function(n) {
    console.log(n * n)
  })(2) // 4, but instead of just printing if we want to return and store the data, we do as shown below
  
  let squaredNum = (function(n) {
    return n * n
  })(10)
  console.log(squaredNum)

  const changeToUpperCase = arr => {
    const newArr = []
    for (const element of arr) {
      newArr.push(element.toUpperCase())
    }
    return newArr
  }
  
  const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
  console.log(changeToUpperCase(countries))
  
  // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]