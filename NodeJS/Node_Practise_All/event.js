var events=require('events');
var eventEmitter=new events.EventEmitter();


// Event Handler
var connectHandler = function connected() {
   console.log('Inside Connection Handler. calling data_recewived function');     
   eventEmitter.emit('data_received');
    console.log('Inside Connection Handler. data_recewived function called');  
}

eventEmitter.on('data_received', function(){
   console.log('data received succesfully.');
});

eventEmitter.on('connection', connectHandler);
eventEmitter.emit('connection');




// listener #1
var listner1 = function listner1() {
   console.log('listner1 executed.');
}
// listener #2
var listner2 = function listner2() {
  console.log('listner2 executed.');
}

// Bind the oneev event with the listner1 function
eventEmitter.addListener('oneev', listner1);
// Bind the oneev event with the listner2 function
eventEmitter.on('oneev', listner2);

// Fire the oneev event 
eventEmitter.emit('oneev');
var temp =eventEmitter.listenerCount('oneev', connectHandler);
console.log(temp+ " Listner(s) listening to oneev event");
					console.log("Remove of one listner ");
// Remove the binding of listner1 function
eventEmitter.removeListener('oneev', listner1);
console.log("Listner1 will not listen now.");

// Fire the connection event 
eventEmitter.emit('oneev');
var temp =eventEmitter.listenerCount('oneev', connectHandler);
console.log(temp+ " Listner(s) listening to oneev event");