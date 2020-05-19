var obj={
    value :50,     //After funTwo value:30;
    number:{
        a:10,
        b:20
    }
};
var fnOne=function(obj,cb){
    let a=obj.number.a;    //10
    let b=obj.number.b;    //20
    cb(a,b,obj);
    console.log('2nd',i=obj.value -a);   //i=30-10;  i=20;
};
function fnTwo(n1,n2,obj){  //n1=10; n2=20;
    console.log('1st',n1+n2);   //10+20=30;
    obj.value =n1+n2;    //10+20=30;
};
fnOne(obj,fnTwo);
