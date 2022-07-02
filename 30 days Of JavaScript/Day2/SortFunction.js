const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
const numbers = [9.81, 3.14, 100, 37]

console.log(products.sort());
console.log(numbers.sort());

console.log("after passing callback function to sort method");

const sortedNumber = numbers.sort((a,b)=> a-b)
console.log(sortedNumber);

/*
Whenever we sort objects in an array, we use the object key to compare. Let us see the example below.

objArr.sort(function (a, b) {
  if (a.key < b.key) return -1
  if (a.key > b.key) return 1
  return 0
})

// or

objArr.sort(function (a, b) {
  if (a['key'] < b['key']) return -1
  if (a['key'] > b['key']) return 1
  return 0
})
*/
const users = [
    { name: 'Asabeneh', age: 150 },
    { name: 'Brook', age: 50 },
    { name: 'Eyob', age: 100 },
    { name: 'Elias', age: 22 },
  ]

  const sortByAge = users.sort((a,b)=>{
    if(a.age < b.age) return -1;
    if(a.age > b.age ) return 1;
    return 0;
   });
console.log(sortByAge);

