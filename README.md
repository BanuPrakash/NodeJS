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








