const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]
//Filter countries containing land

const cc = countries.filter((e)=>
    e.includes('land')
)
console.log(cc)

const endWithIA = countries.filter(e=> e.endsWith('ia'))
console.log(endWithIA);

const lengthwithFive = countries.filter(e=> e.length === 5);
console.log(lengthwithFive);


const scores = [
    { name: 'Asabeneh', score: 95 },
     { name: 'Lidiya', score: 98 },
    { name: 'Mathias', score: 80 },
    { name: 'Elias', score: 50 },
    { name: 'Martha', score: 85 },
    { name: 'John', score: 100 },
  ]

  const passWithDestinction = scores.filter(e=>e.score>=75);
  console.log(passWithDestinction);
  
