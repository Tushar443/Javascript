/*
console.log('%d %s of JavaScript', 305, 'Daysss')

console.log('%c30 Days Of JavaScript', 'color:green') // log output is green
console.log(
  '%c30 Days%c %cOf%c %cJavaScript%c',
  'color:green',
  '',
  'color:red',
  '',
  'color:yellow'
) // log output green red and yellow text


console.error('This is an error message')
console.error('We all make mistakes')


console.log("\n## console.table Array ###");
const names = ['Asabeneh', 'Brook', 'David', 'John']
console.table(names)


console.log("\n## console.table Object ###");

const user = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  }

  console.table(user);

//   ####  Console.time
const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
console.time("regular for loop ");
for(let i =0;i<countries.length ;i++){
    console.log(countries[i][0],countries[i][1]);
}
console.timeEnd("regular for loop ");

console.time("For of loop");
for(let [country,city] of countries){
    console.log(country,city);
}
console.timeEnd("For of loop");

console.time("forEach")
countries.forEach(([country,city])=> console.log(country,city));
console.timeEnd("forEach")


console.info("need coding roung")

console.info('30 Days Of JavaScript challenge is trending on Github')
console.info('30 Days Of fullStack challenge might be released')
console.info('30 Days Of HTML and CSS challenge might be released')

// ##### Assert()
console.log("\n\n\n Assert()");

for(let i =0;i<=10;i++){
    let errorMessage = `${i} is not a even number`;
    // console.log('the even number is '+i);
    console.assert(i%2===0,errorMessage);
}
*/


const names = ['Asabeneh', 'Brook', 'David', 'John']
const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
const user = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}
const users = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28
  }
]

console.group('Names')
console.log(names)
console.groupEnd()

console.group('Countries')
console.log(countries)
console.groupEnd()

console.group('Users')
console.log(user)
console.log(users)
console.groupEnd()

function func(){
    console.count("function is called ");
}

func()
func()
func()

// console.clear();