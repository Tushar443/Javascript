var http =require ('http');
var server =http.createServer(function(req,resp){
    resp.end('server again Worls!!');
})

server.listen(3000,function(){
console.log('Server started on port :3000');
});