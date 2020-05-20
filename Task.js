// Q 1:-
// function fnOne(cb){   //Reference to cb Function 
//     return cb;
// }
// function cb(){
//     return "Hello World!!";
// }
// const resOne=fnOne(cb); //reference to cb Function
// const resTwo=resOne();  //Hello World!!
// console.log('1st',resOne); //Function cb
// console.log('2nd',resTwo); //Hello World!!

//Q 2:-

 function fnOne(cb){       //referance to cb
     const value ='Hello';
     return cb(value);    //call function and pass 'Hello' in the function
 }
 function cb(str){        //str ='Hello'
     const value =' World';
     return str+value;    // return 'Hello World'
 }
 const result =fnOne(cb);  // result='Hello World'
 console.log(result);      //'Hello World'

//Que 3:-

// function fnOne(cb,next){       //referance to cb and next function
//     return cb(next);           //call function cb and pass next function.
// }
// function cb(argFn){            // argFn function holds reference to next function 
//     return argFn(' write code.'); //call next Function and pass 'write code'.
// }
// function next(str){            //str='write code'
//     return 'I'+ str;           //return 'i write code'
// }
// const result = fnOne(cb,next); //result='i write code'
// console.log(result);           //'i write code'

//Que 4:-

// function fnOne (str,cb){             // str='Javascript' and cb holds reference to function cb
//     function fnTwo(msg,adj){         //msg='Javascript' and adj ='Flexible'  
//         return msg+' is '+adj;      //return 'Javascript is Flexible'
//     }
//     return cb(str,fnTwo);           //call cb function and pass 'Javascript' and fntwo function
// }
// function cb(msg,next){            //msg='Javascript' and next is reference to fnTwo function
//     return next(msg,'Flexible');  //call fnTwo function and pass 'Javascript' and 'Flexible'
// }
// const result = fnOne('Javascript',cb); //result='Javascript is Flexible'
// console.log(result);                //'Javascript is Flexible'











































