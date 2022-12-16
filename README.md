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

node server.js

autocannon -c 1000  http://localhost:3000

node --inspect-brk server.js

chrome web browser
address bar: chrome://inspect/

----------------------------------------------------------------


Day 2

nodejs as platform --> V8 and Libuv { similar to WebApi of Browser}

setInterval(); --> WebApi in Browser
setInterval(); --> Libuv in NodeJS

Libuv --> Thread pool / Async Operations --> OS Helpers { this doesn't use Thread pool}

Module System: CommonJS module system is the default module system provided by NodeJS { module.exports and require()}

--> "fs": readFileSync() is a blocking code; readFile() is non blocking executes callback function with the file contents;
--> EventEmitter: emit("eventname", data); 
--> on();  is to subscribe for a event
--> once() is to subscribe for a event; unsubscribe after first-event is reacived

--> fs --> createReadStream() is based on event emitter --> "data", "end", "error"

-------------------------

NodeJS is having a single Stack and event loop thread; --> this might lead to issues with CPU intense operations

fork() and spawn();

-----------------------------------------

Node Application:

Node package Managers:
1) NPM (default)
2) YARN
3) PNPM 

$ npm --version
9.1.1

Package Managers uses:
1) manage dependencies ==> 3rd party libraries

a) Project specific library
npm install react
yarn add react

b) global installation --> only for exectuable module
npm install -g typescript
npm root -g
npm config list

--> Similar to Maven / Gradle; PIP

2) execute scripts
npm start
npm test
npm run development

3) Publish modules
npm publish

PyTorch ==> Library
Django ==> Framework ==> APIs ==> Web application

-----------------

steps for node project:
1) npm init --y

creates a package.json
similar to "pom.xml" of java

package.json is the place where "dependencies" , "development dependencies" and "peer dependencies" are configured

npm i lodash

every node project has "node_modules" folder where "3rd party" libraries are installed.

npm i mocha chai request -D

 "dependencies": {
    "lodash": "^4.17.21"
  },
  "devDependencies": {
    "chai": "^4.3.7",
    "mocha": "^10.2.0",
    "request": "^2.88.2"
  }


devDependencies --> libraries required only in development stage / not required in production code



Package managers takes care of transitive dependencies also.
a 1.5.2 --> b 5.2.5 --> c 7.1.1



"lodash": "4.17.21" ==> exact version

"lodash": "^4.17.21" => minimum version expected is "4.17.21"; can download latest version if available

"lodash": "~4.17.21" ==> expect major version to be "4"; minor version and patch version can be different


team members:

folder> npm install

lodash ==> a 1.3.4

dummy ==> a 4.5.6

"Peer dependency"

Project-X --> uses react

 "peerDependencies": {
    "react": "18.1.0"
  },


 Project-Y uses Project-X

 "dependencies" : {
 	"project-x": "1.0.0",
 	 "react": "18.1.0"
 }

--------------

JavaScript testing Frameworks

1) Unit testing
Frameworks for unit testing: Mocha, Jasmine, JEST

2) E2E testing
Cypress, Protractor, WebDriver, ...

3) API testing ==> PostMAN / rest clients

TESTING -=-> AAA --> Assemble Action Assert

"test": "mocha --reporter spec"

npm i jest

"test": "mocha --reporter spec"

"test": "jest"



  "test": "jest --coverage"

 ----

 Task

 converter.js

 255, 0 , 255
 ff00ff
 function rgbToHex(r, g, b) {

 }


 ff00ff
 255, 0 , 255
 function hexToRgb(hex) {

 }

 server.js modify to handle converter
 http://localhost:3000/rgbToHex?r=255&g=100&b=100
 http://localhost:3000/hexToRgb?hex=ffffff

 ----------------------


 Day 3

Recap: Worker, Cluster, Node project--> package.json, NPM / YARN / PNPM --> dependencies, devDependencies, peerDependencies,
CommonJS module system, mocha/jest

----


PM2 -> ADVANCED, PRODUCTION PROCESS MANAGER FOR NODE.JS

npm install pm2 -g

pm2 start server.js -i max

pm2 ls

pm2 monit



https://app.pm2.io/bucket/

pm2 link amr3md0z4lv5f6a h8ui9rqsh8psv26

pm2 stop <id>
pm2 stop all
pm2 delete <id>
pm2 delete all

Load Balancer --> Nginx
https://www.nginx.com/

------------------

clinicjs -- > Tools to help diagnose and pinpoint Node.js performance issues

npm i clinic -g

clinic doctor --autocannon [ -c 10 http://localhost:3000 ] -- node slow-event-loop.js

-----------------------------------------------------------------------------------------
JS --> loosely typed and dynamically typed:
let x = 100;
x++;

x = "Tim";
x.toUpperCase();

x = false;

if(x) {}


TypeScript
npm i -g typescript

ECMA --> JavaScript engine ES5, ES6/ES2015/ ES7-ESNext

(TypeScript / CoffeeScript / Dart / LiveScript) ==> transpile / trans-compiler / pre-processor --> JavaScript --> engine

* TS provides optional type system to JavaScript
* catch errors by compiler rather than runtime engine
* enhance code quality and understandibility / documentation


1) TypeScript basic types: string, number, boolean

let age:number = 34;

age = "Fifty"; // tsc catches this error

let name:string = "Roger";


2) complex types: Type, interface, class, array, enum, union


type Person = {
	name:string;
	age: number
};

let p1:Person = {"name": "Rahul", "age": 24};


interface Product {
	id: number;
	name: string;
	price: number;
}

let p1: Product = {"id": 12, "name": "iPhone 14", "price": 890000.00};


* interface are extendable [DRY]

// specialization
interface Mobile extends Product {
	"connectivity": string
}

// specialization
interface Tv extends Product {
	screenType:string,
	os:string
}

let p1: Mobile = {"id": 12, "name": "iPhone 14", "price": 890000.00, "connectivity": "5G"};


* interface can be used for realization relationship

// contract
interface Renderer {
	render():void
}



// realization
class TvRenderer implements Renderer {
	// code...

	render() {
		...
	}
}

class WebRenderer implements Renderer {
	// code...

	render() {
		...
	}
}

* function type

function add(x: number, y: number) : number {
	return x + y;
}

add(4,5); // valid

add("a", "b"); // typescript compiler catches this error

function addProduct(p:Product) : void {
	///
}

addProduct({"id": 12, "name": "iPhone 14", "price": 890000.00});

----------------------------------------

* any type and unknown type

let data:any = 10;

data = 'test';

data = true;

---

let data:unknown = 10;
data = "test";

Check examples

----------------
let add = (x,y) => {
	return x + y;
}

or

let add = (x,y) => x + y;

Type Assertions:

Below code throws error
```
interface Product {
    getName():string;
}

interface ErrorMsg {
    getMsg():string
}

function getData(data: Product | ErrorMsg) {
    if(typeof data.getName === 'function') {
        return data.getName();
    }

    if(typeof data.getMsg === 'function') {
        return data.getMsg();
    }
}


console.log(getData({getMsg:() => "Boom :-("}));

```

solution : use type assertions ==> "as"

```
interface Product {
    getName():string;
}

interface ErrorMsg {
    getMsg():string
}

function getData(data: Product | ErrorMsg) {
    if(typeof (data as Product).getName === 'function') {
        return (data as Product).getName();
    }

    if(typeof (data as ErrorMsg).getMsg === 'function') {
        return (data as ErrorMsg).getMsg();
    }
}

let err:ErrorMsg = {getMsg:() => "Boom :-("};

console.log(getData(err));
```

<div id="mydiv"></div>

const myDiv = document.getElementById("mydiv") as HTMLDivElement;

Type Predicates --> "in"


interface Product {
	id:number;
	name:string;
	price?:number;
}

---------------------------------------------------
Generics, High Order Functions

High Order Functions:
1) functions which accept function as argument
2) function return a function


let data:number[] = [5,1,12,31,9,46];

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

let products:Product[] = [
{"id":1,"name":"iPhone","price":124447.44,"category" : "mobile"},
{"id":2,"name":"Onida","price":4444.44,"category" : "tv"},
{"id":3,"name":"OnePlus 6","price":98444.44,"category" : "mobile"},
{"id":4,"name":"HDMI connector","price":2444.00,"category" : "computer"},
{"id":5,"name":"Samsung","price":68000.00,"category" : "tv"}];


// OCP ==> Closed for Change; open for extension
// HOF
function forEach<T>(elems:T[], action:(elem:T) => void):void {
	let i: number = 0;
	for(i = 0; i < elems.length; i++) {
		action(elems[i]);
	}
}

forEach(data, console.log);
forEach(data, alert);

forEach(products, console.log); 

=================


getProduct(3); --> API call --> DB --> convert data to JSON --> cache-> give it to client

getProduct(2); --> API call --> DB --> convert data to JSON --> cache -> give it to client


getProduct(3); --> cache hit


----

function adder(base) {
	return function(no) {
		return base + no;
	}
}

let fiveAdder = adder(5);

console.log(fiveAdder(2));
console.log(fiveAdder(3));

let tenAdder = adder(10);
console.log(tenAdder(2));

-------------

function doTask<T,R>(arg1: T, arg2: R) {
	console.log(arg1 + arg2);
}

doTask("Hello", 33);

doTask("Hello", "World");

==================

--> Enum, Using JS in TS, Decorator, TS module system, ts utils,...



Recap: --> Typescript, simple types, type, interface, any, unknown, as, in, is operators, HOF and generics


Day 4:

create package.json with initial config:

tscexamples> npm init --y


tscexamples> npm i typescript -D

tscexamples> tsc --init

this creates tsconfig.json

https://caniuse.com/

import {random} from 'lodash'; ==> let {random} = require('lodash');


Tracuer/Babel { ES2015 --> ES5}


moduleResolution:

import {random} from './lib';

NodeJS resolution

 --> check in current folder {relativepath} for 'lib.tsx' --> 'lib.ts' --> 'lib.jsx' --> 'lib.js' or find "main file --> generally index.js" in "lib" folder


 tsc --lib "es2015","dom" Example.ts
 

Promise leads to callback hell:
fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => response.json())
	.then(data => console.log(data));


 Async and Await:

async function getData() {
	let response = await fetch('https://jsonplaceholder.typicode.com/users');
	let data = await response.json();
	return data;
}

-----------------------------

TypeScript and JavaScript: using JS libraries in TS

import {random} from 'lodash';
looks for 'lodash.ts' --> typings.d.ts for module defintion

https://github.com/DefinitelyTyped/DefinitelyTyped

npm i -D @types/lodash

npm i -D @types/node


// destructuring

let product =  {"id":1,"name":"iPhone","price":124447.44,"category" : "mobile"};

let {name, price} = product;


class type:

```
export default class Person {
    name: string; // state --> instance variables
    age: number; // state 

    constructor(name:string = "", age: number = 0) {
        this.name = name;
        this.age = age;
    }
}

```


class Product {
	id, name, price
}

// specializtion
class Tv extends Product {
	screen
}

let sony:Tv = new Tv(1, "Sony Bravia", 890000.00, "OLED")

export default class Person implements Printable {
	print(){}
}

export default class Product implements Printable {
	print(){}
}


let data:Printable = getData(); 

data.print();

===========

Decorators 

A Decorator is a special kind of declaration that can be attached to a class declaration, method, accessor, property, or parameter. Decorators use the form @expression, where expression must evaluate to a function that will be called at runtime with information about the decorated declaration.


@Component({
	"selector": "customer",
	templateUrl:"./customer.html",
	"styleUrl": "./styles.css"
})
public class CustomerComponent {
	name:string; // state
	age:number; // state
}


By adding decorator CustomerComponent gets extra fileds [ selector, templateUrl, styleUrl alsong with name and age]


@Component({
	"selector": "customer",
	template:"<div> ... </div>",
	"style": "body: {color : red}"
})
public class ProductComponent {
	name:string; // state
	price:number; // state
}

-----

public class Component {
	selector,
	selectorUrl,
	template,
	templateUrl,
	style,
	styleUrl
}

public class Productcomponent extends Component {

}


---

Decorators are functions:

1) class Decorator

function classDecorator(constructor:Function) {}

example: function Component(constructor:Function) {}

2) Property Decoratory

function propertyDecorator(target:any, propertyKey:string) {}

function Upper(target:any, propertyKey:string) {}


class Product {

	@Upper
	name:string;

	@Min(3)
	title:string;
}

class Person {
	@Upper
	@Min(3)
	firstName:string;
}

3) Method decorator

function methodDecorator(target:any, methodName:string, descriptor:PropertyDescriptor) {}

function memo(target:any, methodName:string, descriptor:PropertyDescriptor) { // Proxy on actual method}

class Math {

	@Memo
	fibanocci(no:number): number {
		...
	}
}

In JS everthing is a Object; --> Object is an instance of Function function

function add(x,y) {
	return x + y;
}

let add = new Function("x", "y" , "return x + y");

add.call()
add.apply()
add.bind()

-----------------------------

let u:User = {"name": "George"}; // setter is called

let x = u.name; // getter

u has "name" and another key generated by privateKey ==> Symbol

let product = {
	"name": "T"
}

let user = {
	"name": "Harry"
}

function update(name) {
	this.name = name;
}

update.apply(product, "X");
update.apply(user, "Y");

-----------------------

ExpressJS

Docker Desktop; POSTMAN

RESTful WS ==> ExpressJS ==> MongoDB as database

----------

JavaScript in typescript ==> typings.d.ts, @types/node @types/lodash @types/react

Decorators --> functions with specific arguments

Day 5

ExpressJS and MongoDB

ExpressJS --> Middleware Framework for building traditional web applications [ SSR ], building RESTful WS and GraphQL [ appollo]

Building RESTful WS:
* Resource ==> info on server { database, file, printer}
* Representation ==> state of resource at any given point of time
* Content-Negotiation ==> serving representation to clients in various formats [ json / xml /csv / ..]

URL ==> to identify resource
HTTP methods ==> to perform CRUD opertions [GET / POST / PUT / DELETE]

$ tsc a.ts ==> a.js
$ node a.js

OR

$ ts-node a.ts


Steps:
expressapp> npm init --y

expressapp>  npm i dotenv bcrypt body-parser cookie-parser express

expressapp>  npm i typescript @types/node @types/body-parser @types/cookie-parser @types/express ts-node -D

expressapp> tsc --init





