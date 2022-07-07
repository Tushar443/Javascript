function outer (){
    let count = 0 ;
    function inner (){
        count++;
        return count ;
    }
    //return inner();
    return inner
}

let innerFunc = outer();
// console.log(innerFunc);
// console.log(innerFunc());
// console.log(innerFunc());
// console.log(innerFunc());


let outerFunc= function(){
    let count = 0;
    function inner1(){
        count++;
        return count;
    }
    function inner2(){
        count--;
        return count;
    }

    return {
        inner1 : inner1,
        inner2 : inner2
    }
}

let outer2 = outerFunc();
console.log(outer2.inner1());
console.log(outer2.inner2());

