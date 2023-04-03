# NodeJS TypeScript and ExpressJS

Banuprakash C

Full Stack Architect,

Co-founder Lucida Technologies Pvt Ltd.,

Corporate Trainer,

Email: banu@lucidatechnologies.com; 

banuprakashc@yahoo.co.in

https://www.linkedin.com/in/banu-prakash-50416019/

https://github.com/BanuPrakash/NodeJS



Softwares Required:

Visual Studio Code.

Chrome Web Browser

NodeJS Latest LTS

=====================================

$ node --version
v18.12.0

Version conflict:
https://github.com/nvm-sh/nvm

NodeJS:
* Platform built on V8 engine 
* uses Libuv C/C++ library for event loops, async execution, non blocking IO
* Created by Ray Daul --> 2009

JS engine [ ECMA Specification] to run JavaScript
* V8 [ Chrome , NodeJS]
* SpiderMonkey [ FireFox ]
* Chakra [ Microsoft]
* Nashorn [ Oracle ]
* JavaScriptVM [ Opera]

NodeJS 
Event loop and CallbackQueue

file.js
```
console.log("Hello");

setInterval(function timed() {
    console.log("timed");
}, 100);

Promise.resolve().then(function one() {
    console.log("1");
});

Promise.resolve().then(function two() {
    console.log("2");
});

console.log("Bye");
```

node file.js

Event loop empties MicroTask Queue and then takes MacroTask Queue for execution

Event loop waits for Stack to be empty before it takes functions form callback for exception

MicroTaskQueue: Promise, Observable

MacroTask: Timer, event
```
class TimerThread extends Thread {
    TimerThread(cb, delay, MacroTaskqueue queue) {/./}

    void run() {
        while(true) {
            Thread.sleep(delay);
            queue.push(cb);
        }
    }
}
```
Event loop is a Thread --> PsuedoCode
```
const microTask = [];
const pendingTimers = [];
const pendingOsTasks = [];
const pendingOperations = [];

function shouldContinue() {
    return pendingTimers.length || pendingOsTasks.length || pendingOperations.length
}

while(shouldContiinue()) {
    1) check all microTasks and empty it
    2) check pendingTimers and empty it [ setTimeout, setInterval]
    3) Pause execution
    4) pendingOperations...
}
```

Module System in JS: 
1) pure Vanilla module system ==> IIFE {Immediate Invoke Function Expression}

file.js
let orderModule = (function() {
    var data = 22;
}
let productModule = (function() {
    var data = 100;
    function doTask() {
        someTask();
       data += 10;
    }

    function someTask() {
        //
    }
    function getData() {
        return data;
    }
    return {
        getData,
        doTask();
    }
})();

productModule.getData();
productModule.doTask();
productModule.data; // error
productModule.someTask(); // error

2) CommonJS module system { default used in NodeJS}

lib.js

function add(x,y) {

}

function subtract(x,y)  {

}

function multiply(x,y) {

}

module.exports = {add, subtract}

other.js
let {add, subtract} = require('./lib');

3) ES 6 module --> TypeScript
4) AMD --> Asychronous Module Definition
5) System
..

