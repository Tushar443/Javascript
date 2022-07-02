const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
    'Marathi',
    'Marathi',
    'Marathi',
    'Hindi',
    'Hindi',
    'Hindi',
    'Hindi',
    'Hindi',
  ]

  const newSet = new Set(languages);
  console.log(newSet);
  const countOfLanguage = []
  for(let lan of newSet){
    const countofLan = languages.filter(l => l===lan)
    console.log(countofLan);
    countOfLanguage.push({Language : lan , Count : countofLan.length})
  }

  console.log(countOfLanguage);

  const numbers = [5, 3, 2, 5, 5, 9, 4, 5]
  const setOfNumbers = new Set(numbers)
  
  console.log(setOfNumbers)

  // #### Union 

let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log(C)