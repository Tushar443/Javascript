var Fun1=function (a){
    console.log(a);
    fun3();
    function fun2(){
        console.log('fun2')
    }
}
var b=12;
// fun2();  Error :We can not call inner function
function fun3(){
    console.log('fun3');
}
Fun1(b);
