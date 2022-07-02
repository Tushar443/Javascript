//var b=34;

//var myvar=function(a,b){
 //   console.log('additon is = ',a+b);
//}
//myvar(34,b);

var b =34;
function fun1(){
    console.log('fun 1');
}
function fun1(){     //it will override above function like normal variable.
    console.log('fun 2');
}
fun1();