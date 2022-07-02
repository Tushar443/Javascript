const num = [1,2,3,4,undefined]
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let [num1,num2,num3,,num4] = num;
console.log(num1,num2,num3,num4);

const scientificConstants = [2.72, 3.14, 9.81, 37, 100]
let [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants

// console.log(e,pi,gravity, bodyTemp, boilingTemp)

let[num10,num30,,,num40='tushr'] = num

console.log(num10,num30,num40);

let [num0,...rest ] = nums;
console.log(num0,rest);


const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]

for(let [country, city ] of countries){
    console.log(country,city);
}

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
  
  for(const [first, second, third,fourth='nothing'] of fullStack) {
  console.log(first, second, third,fourth)
  }