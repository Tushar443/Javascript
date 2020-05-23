const http=require('http');
http.createServer(function(req,res){
    res.write('hello from node server');
    res.write('now one more line');
    res.end();
}).listen(5002,function(){
    console.log('server Started');
});