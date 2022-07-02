const dosomething = callback =>{
    const skills = ['html','css','js']
    callback('' , skills);
}

const callback = (err, result)=>{
    if(err){
        return console.log(err);
    }
    return console.log(result);
}

dosomething(callback);