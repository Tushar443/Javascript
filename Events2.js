var event=require('events');
var http=require ('http');
var eventEmitter= new event.EventEmitter();
var server= http.createServer(function(req,rep){
    
    eventEmitter.emit('someone Requested','My Data');   //Event Trigger
});

eventEmitter.on('someone Requested',function(data){
        console.log('Server is Responded!',data.toString());
})