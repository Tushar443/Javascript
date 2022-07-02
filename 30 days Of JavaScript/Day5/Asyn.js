const square = async function(n){
    return n*n;
}

square(8).then(res => console.log(res)).catch(err => console.log(err))