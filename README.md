# TypeScript and NodeJS

Banuprakash C

Full Stack Architect,

Co-founder Lucida Technologies Pvt Ltd.,

Corporate Trainer,

Email: banuprakashc@yahoo.co.in

https://www.linkedin.com/in/banu-prakash-50416019/

https://github.com/BanuPrakash/NodeJS

Softwares Required:
1) Visual Studio Code. IDE
2) NodeJS Latest LTS
3) Chrome web browser

------------------------------------------------

NodeJS + TypeScript + ExpressJS

NodeJS
* Platform built on V8 engine and Libuv Async I/O librarires ( C / C++ )
JS engine --> V8, SpiderMonkey, Nashorn , Rhino, Chakra,...

* libuv is a multi-platform C library that provides support for asynchronous I/O based on event loops.

* nodejs uses event-driven, non-blocking I/O Model

file.js

console.log("Hello");

setInterval(function timed() {
	console.log("timed!!!");
}, 1000);

Promise.resolve(function() {
	console.log("resolved2");
});

Promise.resolve(function() {
	console.log("resolved2");
});

console.log("Bye!!!");


---

class TimerThread extends Thread {
	public TimerThread(MacroTaskQueue q, Method callbackfn, long time) {
		...
	}

	public void run() {
		while(true) {
			sleep(time);
			q.push(callbackfn);
		}
	}

}

--------------

MacroTasks: setTimeout, setInterval, setImmediate, UI rendering, I/O

MicroTask: Promise, Observer {onNext, onError, OnComplete}, process.nextTick

```
function getProducts() {
	return new Promise( function(resolve, reject) {
		axios.get("http://server.com/products").then(response => {
			if(response.status === 200) {
				resolve(response.data);
			} else {
				reject("Error fetching products!!!")
			}
		})
	});
}


function getUsers() {
	return new Promise( function(resolve, reject) {
		axios.get("http://server.com/users").then(response => {
			if(response.status === 200) {
				resolve(response.data);
			} else {
				reject("Error fetching users!!!")
			}
		})
	});
}

getProducts();
getUsers();

```
=================================================
node by default loads librarires out of the box:
https://github.com/nodejs/node/tree/main/lib

https://github.com/nodejs/node/blob/main/lib/crypto.js
const constants = internalBinding('constants').crypto;

this loads C / C++ code

https://github.com/nodejs/node/tree/main/src/crypto

====================================================================

* NodeJS V8 memory Structure

* RSS - Resident Set Size
* Stack
* Heap

Stack:
function add(x,y ) {
	var result = x + y;
}

Heap:
let p = new Product();

let u = new User();

let x = {};

New Generation --> Eden Area ==> First objects are placed in New Generation

Virtual Machine / Engines ==> we don't have destructors ==> we have Garbage Collector [GC] --> to clean up unused memory

GC --> Short term GC --> checks New generation and cleans up un-unsed memory; objects which survive n-cycles of Short term GC are moved to Old Generation using Semi-state 1 or semi-state 2 {s1 and s2}

GC --> Full term GC --> garbage collect Old generation --> Mark Sweep Compact


-----------------
 
https://www.jsv9000.app/

```

setTimeout(function one() {
	console.log("t1");
},0);

console.log("Hello");

setTimeout(function two() {
	console.log("t2");
},0);

console.log("timers loaded");

Promise.resolve().then(function p1() {
	console.log("p1");
});


Promise.resolve().then(function p2() {
	console.log("p2");
});

console.log("Bye");


```

=================================================

Where can i use using NodeJS?

* Building APIs --> RESTful / GraphQL WS
* Building Traditional web applications --> SSR
* Streaming Platform like --> Netflix / Prime / HotStar
* Realtime applications ==> ChatBots
* Building Client side web application: --> TransCompile / Unit testing / E2E tesing / Linting / Bundle
---> We might write in code in TypeScript / DART / LiveScript or CoffeeScript ---> transcompile --> JS 


Module System
* JS vanilla module system --> IIFE {Immediate Invoke Function expression}

var data = "A"; // global variable

var shoppingModule =(function() {
	var data = 100; // private to module

	function setData(d) {
		data = d;
	}

	// private fn
	function print() {
		...
	}
	return {
		data,
		setData
	}
})();

shoppingModule.data ; // 100
shoppingModule.setData(44); 
shoppingModule.print(); // error

var userModule = (function() {
	var data = "Hello";

	function getData() {
		return data;
	}

	function print() {
		...
	}

	return {
		getData,
		print
	}
})();

userModule.data; // "Hello" but error because it's private
userModule.getData(); // "Hello"

* CommonJS module is the default module system used by NodeJS

one file is one module

lib.js

const PI = 3.14159;

function add(x,y) {//}

function subtract(x,y) {//}

// private within lib.js
function multiply(x,y) {//}


module.exports = {
	PI,
	add,
	subtract
}

other.js

const {add,subtract, PI} = require('./lib');

console.log(add(4,5));

-------------------------------

* ES 6 module
* AMD
* UMD
* System

---------------------------------------------------

NodeJS and Threads.

NodeJS and async os helpers [anything to do with Network/ sockets]

Event Emitter

EventEmitter exposes methods to interact with events like:
* once(): add a one-time listener
* on(): add a listener --> regester for a event
* removeListener()

---
For Benchmark, loadtest: Autocannon

npm install -g autocannon


