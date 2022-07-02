const person = {
    firstName: 'Asabeneh',
    age: 250,
    country: 'Finland',
    city:'Helsinki',
    skills: ['HTML', 'CSS', 'JS'],
    title: 'teacher',
    address: {
      street: 'Heitamienkatu 16',
      pobox: 2002,
      city: 'Helsinki'
    },
    getPersonInfo: function() {
      return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
    }
  }

//   console.log(Object.keys(person));
  let copyPerson = Object.assign({},person)
//   console.log(copyPerson);

//   const keys = Object.keys(copyPerson)
// console.log(keys) //['firstName', 'age', 'country','city', 'skills','title', 'address', 'getPersonInfo']
const address = Object.keys(copyPerson.address)
// console.log(address) //['street', 'pobox', 'city']

// ## values 
const values = Object.values(copyPerson)
// console.log(values)

// ### Entries 
const entries = Object.entries(copyPerson)
// console.log(entries)


// ### hasownProperty()
console.log(copyPerson.hasOwnProperty('name'))
console.log(copyPerson.hasOwnProperty('skills'))

let object = {
    name : 'doogy',
    leg : 4,
    age : 12,
    colour : 'black',
    bark : function(){
        return 'woof woof';
    }
}
console.log(object.bark());