const dosomethingPromise = new Promise((result,reject)=>{
    let skills =['html','css','js']
    if(skills.includes('node')){
        result('full stack')
    }else{
        reject('wrong')
    }
})  

dosomethingPromise.then(result=>{
    console.log(result);
}).catch(err => console.log(err))
