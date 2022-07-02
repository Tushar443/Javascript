arr =[10,20,30,40,50]

arr.forEach(function (element, index, arr) {
   // console.log("index= "+index,"element= "+ element)
  })
  // The above code can be written using arrow function
//   arr.forEach((element, index, arr) => {
//     console.log(index, element, arr)
//   })
  // The above code can be written using arrow function and explicit return

  //  Arrow function 
//   arr.forEach((element, index, arr) => console.log(index, element, arr))

  states = ['Maharastra','up','bihar','keral','manali','karnataka'];

  states.forEach(s =>{console.log(s.toUpperCase());})