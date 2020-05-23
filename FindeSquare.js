const square =require('./Square.js')
function calSquare(params) {
    console.log('Areav is = '+square.area(params));
    console.log('Perimeter is = '+square.perimeter(params));
}

calSquare(5);
console.log(__filename);
console.log(__dirname);