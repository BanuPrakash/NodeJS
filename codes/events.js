const EventEmitter = require('events');

const eventEmitter = new EventEmitter();
// this object exposes on, emit, once method

eventEmitter.on("data", number => console.log("l1 : ", number));
eventEmitter.once("data", number => console.log("l2 : ", number));
eventEmitter.once("end", () => console.log("end of events"));

eventEmitter.emit("data", 100);
eventEmitter.emit("data", 145);
eventEmitter.emit("data", 300);

eventEmitter.emit("end");
