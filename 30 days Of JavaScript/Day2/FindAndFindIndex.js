//find: Return the first element which satisfies the condition
const ages = [24, 22, 25, 32, 35, 18]

const age = ages.find(e=>e < 20)
console.log(age);

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const result = names.find((name) => name.length > 7)
console.log(result)


// ######### FindIndex
/*
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const ages = [24, 22, 25, 32, 35, 18]

const result = names.findIndex((name) => name.length > 7)
console.log(result) // 0

const age = ages.findIndex((age) => age < 20)
console.log(age) // 5

*/