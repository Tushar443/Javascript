var js =require("fs");
js.readFile("text.txt",function(err,data){
    if(err)
        console.log(err);
    setTimeout(()=>{
        console.log("Dispaly After 2 Second");
    },2000);
});

console.log("Start Here");