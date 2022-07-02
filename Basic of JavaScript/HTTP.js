var fs=require('fs');
var http =require('http');
var url=require('url');
http.createServer(function(request,response){
    var pathname =url.parse(request.url).pathname;
    console.log("request for",pathname,"received");
    fs.readFile(pathname.substr(1),function(err,data){
        if(err)
        {
            console.log(err);
            response.writeHead(404,{'content-type':'text/html'});
        }
        else
        {
            response.writeHead(200,{'content-type':'text/html'});
            response.write(data.toString());
        }
        response.end();
    });
});
console.log('server running at localhost : 3000');