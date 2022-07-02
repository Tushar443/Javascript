const numbers = [1, 2, 3, 4, 5]

const variable = numbers.reduce((acc,cur)=> acc*cur,1);
console.log(variable);

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook',10]
const areAllStr = names.every((name) => typeof name === 'string') // Are all strings?
const allString = names.every(name=>typeof name ==='string');
console.log(allString) /// false 

// #### some()

const names1 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const bools = [true, true, true, true]

const areSomeTrue = bools.some((b) =>  b === true)

console.log(areSomeTrue) //true

const areAllStr1 = names.some((name) => typeof name === 'number') // Are all strings ?
console.log(areAllStr1) // false