function add(newArr,item)
{
    newArr.push(item);
    console.log(newArr);
   // console.log("Pop Operation =",newArr.pop());
   // console.log("Push Operation =",newArr.push());
    return newArr.unshift();
}
var arr=[1,2,3,4,5,6,7];
console.log(add(arr,14));
//console.log(add(arr,13));