// a callback function, the name of the function could be any name
const callback = (n) => {
    return n ** 2
  }
  // function that takes other function as a callback
  function cube(callback, n) {
    return callback(n) * n
  }
  console.log(cube(callback, 3))

//   ### Higher order function return function as value 
// Higher order function returning an other function
const higherOrder = n => {
    const doSomething = m => {
      const doWhatEver = t => {
        return 2 * n + 3 * m + t
      }
      return doWhatEver
    }
    return doSomething
  }
  console.log(higherOrder(2)(3)(10))

//   #### call back function 

const numbers = [1, 2, 3, 4, 5]
const sumArray = arr => {
  let sum = 0
  const callback = function(element) {
    sum += element
  }
  arr.forEach(callback)
  return sum

}
console.log(sumArray(numbers));

// simplyfy above expression

const num = [1,2,3,4,5]
const sumArr = arr=>{
    let sum =0;
    arr.forEach(function(e){
        sum+=e;
    })
    return sum;
}
console.log(sumArr(num));  
 