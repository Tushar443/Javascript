// var example={name : "Tushar",age : 23,city: "satara"};
// var myfile=JSON.stringify(example);
// console.log(myfile);

// var example='{"name" : "Tushar","age" : 23,"city": "satara"}';
// var myfile=JSON.parse(example);
// console.log(myfile);

// var example ="567";
// var str =toString(example);
// console.log(typeof(str));


// //Q 4-i)
// const total=function(x){
//         return function(y){
//                 return function(z){
//                     return x+y+z;
//                 }
//         }
// }
// const result = total(1)(2)(3);
// console.log(result);

// //Q 4-ii)
// const fnOne= function (x){
//     return {
//         fnTwo:function(y) {
//             return{
//                 then:function (params) {
//                     var z=x+y;
//                     params(z);
//                 }
//             } 
//         }
//     }
// }

// fnOne(1).fnTwo(2).then(function(result){
//     console.log(result)});

// Q 4-iii)
const schema={
    model:{
        add :function(x,y){
            return{
                then:function(params){
                    return {
                        catch:function(err){
                            let sum=x+y;
                            if(sum===100)
                                params(sum);
                            else
                                err("Wrong Argument");
                        }
                    }
                }
            }
        }
    }
}
schema.model.add(57,45).then(function(result){
    console.log(result)
}).catch(function(err){
    console.log(err)
});
schema.model.add(54,46).then(function(result){
    console.log(result)
}).catch(function(err){console.log(err)});











































