const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
  ]

  const setexm = new Set(languages);
  console.log(setexm);
  
  for (const la of setexm)
  {
    // console.log(la);
  }
  console.log(setexm.size);
console.log("adding two elements to set");
  setexm.add('tushr')
  setexm.add('extra')

  console.log(setexm);
console.log("remove one element from set");

setexm.delete('tushr')
console.log(setexm);

console.log("remove all element set");
setexm.clear();
console.log(setexm);


