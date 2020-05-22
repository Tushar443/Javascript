// Que 1:-
// function fnOne(n){
//     return n*n;          //return 9;
// }
// (function(fn){
//     const result = fn(3); //call fnOne function and pass 3 as argument.
//     console.log('Result =>',result); //Result => 9
// })(fnOne); //immediatly invoke function and pass function fnOne as argument.


//Que 2:-

// function sqfun(n){
//     return n*n;
// }
// (function (paramfn){         //it holds the reference to x function.
//     const result =paramfn(sqfun); //call that x function and pass sqfun function as argument.
//     console.log('Result =>',result); //from sqfun function return value to x function and 
//                                     //then it will return to paramfn .
// })(function(cb){    //call function and pass another function as argument lets say x function.
//     return cb(5); //cb is holds the reference to sqfun and now pass 5 to sqfun
// });

//Que 3:-
// const obj ={
//     a:5,    //after line number 36 it will be 25.
//            // after line number 33 it will be 40.
//     b:15,
//     c:25
// };
// (function(obj,fn){  //obj=obj and fn holds the reference to x function
//     fn(function (a,b){ // we call x function and pass another function lets say y function.
//         obj.a=a+b;  //assign to a =25+15=40. 
//     })
//     console.log('Result =>',obj.a+obj.b);//Result =>40+15=55
// })(obj,function (next){ //function call and pass obj and the function lets say x function.
//     obj.a = obj.c;   //here next reference to y function.
                    
//     return next (obj.a,obj.b); //calling function y and pass parameters (25,15).
// });

//Que 4:-

let n=2;
(function(cb1,cb2){ //cb1 refer to x function and cb2 refer to y function.
    const res =cb2(cb1(n)); //calling y function and inside that again calling x function
                            //so first x function will work and then it call function y.
    console.log('Result =>',res);//Result => 16
})(function(n){   // call IIFE function and pass two function lets say x function
    return n*n;  //return 2*2=4
},function(n){   //and it is second function lets say y function.
    return n*n;//return 4*4=16
});












































