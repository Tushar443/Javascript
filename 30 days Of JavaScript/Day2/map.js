const numArr = [1,2,3,4,5]

const newArr = numArr.map(e=>e*e);
console.log(newArr);

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const namesToUpperCase = names.map((name) => name.toUpperCase())
console.log(namesToUpperCase)



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
  const countriesToUpperCase = countries.map((country) => country.toUpperCase())
  console.log(countriesToUpperCase)
  
  /*
  // Arrow function
  const countriesToUpperCase = countries.map((country) => {
    return country.toUpperCase();
  })
  //Explicit return arrow function
  const countriesToUpperCase = countries.map(country => country.toUpperCase());
  */
const countriesFirstThreeLetters = countries.map((country) =>
  country.toUpperCase().slice(0, 3)
)