var fs =require("fs");                        //import events module
var event =require("events");

const myEmit= new event.EventEmitter();      //Creating object of EventEmitter

fs.readFile('text.txt',(err,data)=>{
    console.log(data.toString());
    myEmit.emit('readFile');                //Emitting event
})

myEmit.on('readFile',()=>{
    console.log('\nRead Event Succesfully'); //Registering Listener and Defining event handler
})