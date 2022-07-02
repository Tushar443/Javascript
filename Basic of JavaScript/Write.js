var fs =require ('fs');
fs.writeFile('text.txt','text is Override by write Function',function(err){
    if(!err){
        fs.readFile('text.txt',function(err,data){
            if(!err){
                console.log(data.toString());
            }
        });
    }
});
