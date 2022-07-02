let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6] 

let setA = new Set(a);
let setB = new Set(b);

let c = a.filter(n=> !setB.has(n))

c.push(b.filter(n=> !setA.has(n)));

console.log(c);