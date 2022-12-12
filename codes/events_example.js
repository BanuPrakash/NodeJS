const EventEmitter = require('events');

const eventEmitter = new EventEmitter(); 

// event "info" listener
eventEmitter.on('info', data => {
    console.log("L1: " , data);
});

// event "info" listener
eventEmitter.on('info', data => {
    console.log("L2 : " , data);
});

// one-time listener
eventEmitter.once('info', data => {
    console.log("L3 : " , data);
});

eventEmitter.on('end', () => {
    console.log("Bye !!!");
});


eventEmitter.emit('info', "Hello!!!");
eventEmitter.emit('info', "Welcome to NodeJS");

eventEmitter.emit('end');