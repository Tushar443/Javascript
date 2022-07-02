const rectangle = {
    width: 20,
    height: 10,
    area: 200
  }

  const newRectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter : 80
  }
  let {w ,h , a} = rectangle;
  console.log(w,h,a); // undefined

  let {width,height,area} = rectangle
  console.log(width,height,area);  //20 10 200

//   Renaming during destructuring

let {width: w1,height:h1,area:a1 ,perimeter: p=60} = newRectangle
 console.log(w1,h1,a1,p);


//  ##########
 const rect = {
    width: 20,
    height: 10
  }


 const calculatePerimeter = ({ width, height }) => {
    return 2 * (width + height)
  }

  console.log(calculatePerimeter(rect)) // 60


  const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    job: 'Instructor and Developer',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Redux',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
    ],
    languages: ['Amharic', 'English', 'Suomi(Finnish)']
  }
// Let us create a function which give information about the person object with destructuring
const getPersonInfo = ({
    firstName,
    lastName,
    age,
    country,
    job,
    skills,
    languages
  }) => {
    const formattedSkills = skills.slice(0, -1).join(', ')
    const formattedLanguages = languages.slice(0, -1).join(', ')
  
    personInfo = `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${formattedSkills} and ${
      skills[skills.length - 1]
    }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`
  
    return personInfo
  }
  console.log(getPersonInfo(person))
  /*
  Asabeneh Yetayeh lives in Finland. He is  250 years old. He is an Instructor and Developer. He teaches HTML, CSS, JavaScript, React, Redux, Node, MongoDB, Python and D3.js. He speaks Amharic, English and a little bit of Suomi(Finnish)
  */


// ######  Destructuring object during iteration

const todoList = [
    {
      task:'Prepare JS Test',
      time:'4/1/2020 8:30',
      completed:true
    },
    {
      task:'Give JS Test',
      time:'4/1/2020 10:00',
      completed:false
    },
    {
      task:'Assess Test Result',
      time:'4/1/2020 1:00',
      completed:false
    }
    ]

    for(const {task,time,completed} of todoList){
        console.log(task,time,completed);
    }


const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums
console.log(num1, num2, num3)
console.log(rest)


const even = [2,4,6,8,10]
const odd  = [1,3,5,7,9]
let evenNum = [...even];
let oddNum = [...odd]

let wholeNum=[...even,...odd]
console.log(evenNum);
console.log(oddNum);
console.log(wholeNum);


// Modifying or changing the object while copying

const user = {
  name:'Asabeneh',
  title:'Programmer',
  country:'Finland',
  city:'Helsinki'
}

const copiedUser = {...user, title:'instructor'}
console.log(copiedUser)


//Spread operator with arrow function
//Whenever we like to write an arrow function which takes unlimited number of arguments we use a spread operator. If we use a spread operator as a parameter, the argument passed when we invoke a function will change to an array.

const sumAllNums = (...args) => {
  console.log(args)
}

sumAllNums(1, 2, 3, 4, 5)

