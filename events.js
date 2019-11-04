var events=require('events');
var eventEmitter=new events.EventEmitter();

var ringbell=function()
{
    console.log("Someone come and Ringbell");
}

var exit=function()
{
    console.log("Thanks for shopping with us ");
}


eventEmitter.on('dooropen',ringbell);
eventEmitter.emit('dooropen');

eventEmitter.on('exit',exit);
eventEmitter.emit('exit');