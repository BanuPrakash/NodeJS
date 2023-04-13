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
 products: Product[ ] = [
            { "id": 1, "name": "iPhone", "price": 124447.44, "category": "mobile" },
            { "id": 2, "name": "Onida", "price": 4444.44, "category": "tv" },
            { "id": 3, "name": "OnePlus 6", "price": 98444.44, "category": "mobile" },
            { "id": 4, "name": "HDMI connector", "price": 2444.00, "category": "computer" },
            { "id": 5, "name": "Samsung", "price": 68000.00, "category": "tv" }
        ];

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

https://www.jsv9000.app/

http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

```
console.log("Hello");

setTimeout(function one() {
    console.log("1");
}, 0);

setTimeout(function two() {
    console.log("2");
}, 0);

Promise.resolve().then(function p1() {
    console.log("p1");
});

Promise.resolve().then(function p2() {
    console.log("p2");
});

console.log("Bye");
```


ab -n 2000 -c 100 http://localhost:1234/


To make it highly available server ==> Cluster
Clusters of Node.js processes can be used to run multiple instances of Node.js that can distribute workloads among their application threads.

The cluster module allows easy creation of child processes that all share server ports.

https://www.npmjs.com/package/pm2

PM2: PM2 is a daemon process manager that will help you manage and keep your application online 24/7

npx pm2 start server3.js -i 4
or
npx pm2 start server3.js -i 0

npx pm2 list

npx pm2 delete id/all

npx pm2 restart id/all

npx pm2 monit

Dashboard ==> Metrics
// pm2 website

1) free bucket
 Connect+ 
2) npx pm2 link amr3md0z4lv5f6a h8ui9rqsh8psv26

===

Debug:
node --inspect-brk server3.js

Chrome:
addressbar: chrome://inspect

=======================================================

Day 2

Worker Threads

Node package Managers 
* manage dependencies --> 3rd party modules
* publish modules to repository
* to run scripts {start, build, test}

* NPM is the default package manager --> installed along with NodeJS
* YARN
* PNPM
* Rush / Lerna /...

$ npm --version
9.1.3


NPM can install packages for a given project or install globally

Global installation is only for executable module

Example:

Project specific installation
npm i react

Global installation
npm i -g typescript

npm list -g
/usr/local/lib

npm config list

npm config ls -l

registry = "https://registry.npmjs.org/" 
https://www.npmjs.com/

---

npm i -g yarn

yarn add react

===========================

node project

mkdir nodeapp
cd nodeapp
nodeapp> npm init --y

this creates package.json ==> one per project
file where depenencies, development dependecies, peer dependecies, scripts, .. are configured

npm i lodash
downloads module "lodash" from repository into "node_modules" of the project
adds 
"lodash": "^4.17.21" in package.json
"lodash": "4.17.21" ==> exact version
"lodash": "^4.17.21" ==> 4.17.21 or higher version
"lodash": "~4.17.21" ==> Major version has to be "4" minor and patch can be latest
as in "4.18.21" is valid for download

When this project is published to repository, we don't push "node_modules" folder

team members will download the project from repo and run:
$ npm i

--> this also takes care of transative dependencies
A.1.23.33.jar ==> B.5.2.1.jar  ==> C.6.113.1.jar

npm i A 
will install B and C also

Development dependencies
npm i -D jest chai

Development dependecies ==> not required in production:
Testing, Static Code analysis, compiler


nodeapp> npm init --y
nodeapp>npm i -D jest chai
nodeapp>npm i lodash

// SOLID design principles
High Order Function: ==> OCP ==> Closed for Change, Open for Extension
1) functions which accept other function as argument
2) function return a function


let data = [5,2,8,3,7];

e => e % 2 == 0

filter(data, e => e % 2 == 0)

let products = [
    {"id": 1, "name": "iPhone 14", "price": 120000.00, "category" : "mobile"},
    {"id": 2, "name": "Samsung ", "price": 240000.00, "category" : "tv"},
    {"id": 3, "name": "Redmi", "price": 8900.00, "category" : "mobile"},
     {"id": 4, "name": "Wacom", "price": 9811.00, "category" : "computer"}
]

filter(products, p -> p.category === 'mobile')

$ npm start

===============

Testing JS
1) Unit Testing
* Mocha
* Jasmine
* Jest

2) E2E Testing
* Cypress
* PlayWright
* WebDriver.io

Chai is a  assertion library for node and the browser that can be delightfully paired with any javascript testing framework.

AAA ==> Assemble Action Assert

Conventions for testing files:
lib.test.js ==> for unit testing
user.spec.js ==> for E2E

============================

TypeScript

JavaScript ==> needs JavaScript engine

JS version ==> ECMA

Developers can choose to write code in latest version of JS, DART, TypeScript, CoffeeScript, LiveScript

https://caniuse.com/

"Babel/Tracuer" is used to transpile Higher version JS to lower version of JS to make it compatable accross browser, we may need pollyfills.

A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.

Promise is ES6 feature, pollyfill like Bluebird / jquery promise in place of ES6 promise


DART, TypeScript, CoffeeScript ==> transpile / transcompiler/pre-processor ==> Lower version of JS {engine compatiable}

csc a.cs ==> a.js

lsc a.ls ==> a.js

tsc a.ts ==> a.js


$ npm i -g typescript

$ tsc --version
Version 4.9.5

TypeScript
* Provide optional type system for JavaScript, statically typed

JavaScript is dynamically typed language, based on literal value it takes the type of data
let x = "Test"; // string
x.toUpperCase();

x = 12; // number
x++;

x = true; // boolean

in TypeScript:
let name:string = "George";
name = 10; // tsc throws error

* Types have proven ability to enhance code quality and understability
let p:Person;

* Early detection of errors, rather than failing at runtime

-----

TypeScript types:
Basic types: string, number, boolean

let name:string = "Danny";
let age:number = 34;

Complex types:

1) enum
enum Direction {
    North:'N',
    South:'S',
    East: 'E'
}

let d:Direction = Direction.North;

2) type

type Product = {
    name:string,
    price:number
}

function addProduct(p:Product) : void {
    //
}

addProduct({name:"iPhone", price: 76000}); //valid
addProduct({name:"iPhone"}); //invalid ==> tsc picks this error

3) interface
3.1) to define a shape like "type"
interface Product {
    name:string,
    price:number
}
// Apply DRY
interface is extendable
// extends is for inheritance ==> Specialization
interface Mobile extends Product {
    camera:string,
    connectivity:string
}

interface Tv extends Product {
    screenType:string
}
function addMobile(m:Mobile):void {
    //
}

addMobile({name:"OnePlus12T", price:98000.00, camera:"64GB", connectivity:"5G"})

3.2) Realization relationship ==> contract

interface Renderer {
    render():void;
}
// implements -=-> Realization
class WebRenderer implements Renderer {
        //

        render(): void {
            // logic
        }
}

class TvRenderer implements Renderer {
        //

        render(): void {
            // logic
        }
}

let render:Renderer = new WebRenderer();
render.render();

4) any 

let data:any = "test";

data = 45;

let x:number = data;

data = {};

let data:any = jsFunction(); 

5) unknown

let data:unknown = "test";
data = 45;
let x:number = data; // error

* any can be assigend to any type
* unknown can be assigend to another unknown type
* before using unknow type -> typechecking has to be done

------

```
Type Assertions ==> "as"
interface Product {
    name:string;
}

interface ErrorType {
    msg:string;
}
// | union type
function printData(data: Product | ErrorType) :void {
    if(typeof (data as Product).name === 'string') {
        console.log((data as Product).name);
    }
}

printData({"msg":"Invalid Data"});

printData({"name":"Macbook Pro"});
```

"in" operator

```

interface Product {
    name:string;
}

interface ErrorType {
    msg:string;
}
// | union type
function printData(data: Product | ErrorType) :void {
    if("name" in data) {
        console.log("Result ", data.name);
    } else if ("msg" in data) {
        console.log("Error ", data.msg);
    }
}

printData({"msg":"Invalid Data"});

printData({"name":"Macbook Pro"});

```
Type Predicates ==> "is"

<div class="card"></div>

const card = document.getElementById(".card") as HTMLDivElement;
// access to all apis of <div>

// ES 6
import BrowserRouter as Router from '..');

Optional:

interface Product {
    name:string,
    price:number,
    company?:string
}

company is optional

let p:Product = {name:"Inverter AC", price:45000.00}; // valid 

----

Not null Assertion [Postfix !]

============================

TypeScript
* statitically typed
* string, number, boolean
* enum, type, interface, any, unknown, union
* as, in and is --> type assertions, type predicates
* ? and !

-----

typescript project

1) create package.json
tsproj> npm init --y
tsproj>npm i typescript
tsproj> tsc --init

"allowJs": true
"sourceMap": true,

a.ts --> a.map.js --> a.js

Generic Type <T>

TypeScript uses ES6 module system [ import and export]
1)
tsc ==> all .ts ==> js
"start": "node ./dist/index.js",

2) npm i ts-node
compiles "ts" and loads in-memory ==> no physical "js" files
and executes compiled "js"
--> good in development stage

https://rxmarbles.com/

HOF:
* function accept function as argument ==> filter, forEach, map, reduce,..
* function returning a function

function adder(base) {
    return function(value) {
        return base + value;
    }
}

let fiveAdder = adder(5);
fiveAdder(2); // 7
fiveAdder(3); // 8

let tenAdder = adder(10);
tenAdder(2); // 12

Closure ==> inner function can access all the members of outer functions


getEmployee(2); ==> RESTApi ==> DB ==> returns data ==> JSON ==> response

getEmployee(3); ==> RESTApi ==> DB ==> returns data ==> JSON ==> response

getEmployee(2); ==> get result from cache

Memoize:In computing, memoization or memoisation is an optimization technique used primarily to speed up computer programs by storing the results of expensive operations.

=======================

JavaScript in TypeScript

* nodejs --> JS library
* react --> Js library
...


npm i lodash

Option 1:
src/typings.d.ts
declare module 'lodash' {
    export function random(min:number, max:number) : number;
}

in index.ts
import {random} from 'lodash';
console.log(random(1,100));

Option 2: using DefinetlyTyped
Definitely Typed
The repository for high quality TypeScript type definitions.

npm i @types/lodash -D
npm i @types/react -D
npm i @types/node -D

==============

```
export default class Student {
    name:string; // instance variable
    age:number; // instance variable

    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }

    getAge () {
        return this.age;
    }

    setName(name:string) {
        this.name = name;
    }

}
```

export class Product {
    constructor(private id:number, private name:string, private price:number) {}
}
// extends ==> inheritance
export class Mobile extends Product {
    constructor(private id:number, private name:string, private price:number, private connectivity) {
        super(id, name, price); // chaininig constructor
    }
} 

TS doesn't support multiple inheritance

export class A implements I1, I2 {

}

============

TypeScript Utils
1) Partial --> fields Optional

interface User {
    id:number,
    username:string,
    email:string,
    password:string
}

function log(u:Partial<User>) {

}

log({"username":"A", "password":"secret123"});

2) Required --> make all fields required


interface User {
    id?:number,
    username?:string,
    email?:string,
    password?:string
}

function register(u:Required<User>) {

}

3) ReadOnly

4) ReturnType

function doTask() {
    return {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        }
}

type T = ReturnType<typeof doTask>;

let retVal:T = doTask();

5) Pick

interface User {
    id:number,
    username:string,
    email:string,
    password:string
}

function log(u:Pick<User, "username" | "password">) {

}

6) Omit

====================

Decorator

React doesn't use decoractor

class ProductComponent extends Component {

}

Angular uses Decorator:

@Component({
    selector:'app-product',
    template:'<div> </div>',
    stylesUrl:['style.css']
})
class ProductComponent {

}


@Component({
    selector:'app-customer',
    template:'<div> </div>',
    stylesUrl:['style.css']
})
class CustomerComponent {

}
----

TS Decorators:
1) class level decorator
function classDecorator(constructor:Function) {}
Example:
```

@Component({
    selector:'app-customer',
    template:'<div> </div>',
    stylesUrl:['style.css']
})
class CustomerComponent {

}
```

2) property decorator

function propertyDecorator(target:any, propertyKey:string){}

class Product {
    id:number;

    @Upper()
    name:string;

    @Min(10)
    price:number;
}

let p:Product = new Product(...);

3) Method Decorator

function propertyDecorator(target:any, methodName:string, descriptor?:PropertyDescriptor){}


class Book {

    @Valid
    addBook(b:Book) {
        //
    }
}

============

tsconfig.json
 "experimentalDecorators": true,

 Object.defineProperty(target, propertyKey, {
            set:setter,
            get:getter
        })

//propertyKey is "age"

get age() {

}

set age(age) {
    this.age = age;
}

age = 100; // set

x = age; //get

== 
Call and Apply

function update(name) {
this.name = name;
}
let o = {"name":"A", "age": 11}
update.call(o, "B")
OR
update.apply(o,["G"])

Task:
https://eloquentjavascript.net/09_regexp.html
Use RegularExpression validate name
@Pattern("[a-zA-Z]{0,10}")
name:string;

========

Webpack , ExpressTS

===============

Day 4

NodeJS, CommonJS module system, TypeScript
* string boolean, number
* type, interface, class
* any, unknown
* Union, Optional, Not-null, typeof
* as, in and is
* Partial, Pick, Omit, ReturnType,
* Generics --> HOF

Where can i use NodeJS?

* Building Client-side application [ React, Angular, Vue, Backbone, ...]
-> TypeScript / DART / CoffeeScript / LiveScript ==> Our code
--> Transpile in nodeJS and take the processed "js" to browser
-> bundle, testing, static code analysis

* Building Traditional web applications {CSR --> Client Side Rendering}
--> Resource on server is converted into presentation and sent to client [ HTML or PDF]
-> Similar to PHP, Servlet and JSP, ASP, ASP.NET

* Building APIs
--> RESTful Web services to serve various representation of state of resource [ JSON / XML]
--> GraphQL WS

* Realtime applications --> ChatBot

* Streaming Platform ==> Netflix [Ruby/Rails --> NodeJS]

NodeJS is not that good for any application which is CPU intense

===================

JavaScript build tools: automatically perform frequent tasks such as uglify, minification, compilation, unit testing, and linting.
* Grunt
* Gulp
* Webpack

Webpack:
1) npm init --y
create package.json

2) npm i webpack webpack-cli webpack-dev-server html-webpack-plugin typescript ts-loader style-loader css-loader -D


3) tsc --init
creates tsconfig.json


 {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
}

file.ts

import './style/styles.css'
css-loader --> loads "styles.css" into memory
style-loader --> places that loaded CSS into
<style>
</style>
of HTML

-----

 resolve: {
        extensions: ['.tsx', '.ts', '.js']
    }

    import {add, map} from './lib';

    checks for lib.tsx else lib.ts else lib.js


The HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles. 
This is especially useful for webpack bundles that include a hash in the filename which changes every compilation. 

bundle.js in "dist"

<script src="./dist/bundle$ddvdfdg@42.js"></script>
<script src="./dist/bundle#dsfdsf23238!.js"></script>


npm run prod
asset bundle.js 1.25 KiB
minify --> remove white space
uglify --> shorten variable, function names

npm run dev
asset bundle.js 5.02 KiB


Gulp:
npm i typescript gulp@4.0.0 gulp-typescript

```
gulpfile.js:

var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
gulp.task("default", function () {
  return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest("dist"));
});

$ gulp
```

API --> MongoDB

Docker for Desktop

docker run --name some-mongo -d mongo:latest -p 27017:27017

MongoDB --> NOSQL database --> BSON

MongoDB
Database
Collection {table}
document {row}
fields {col}


docker cp sales.json some-mongo:/tmp/sales.json
docker cp employees.json some-mongo:/tmp/employees.json

Access MongoShell:
```
1) docker exec -it some-mongo bash
mongoimport --db node_express_db --collection sales --drop --file tmp/sales.json
mongoimport --db node_express_db --collection employees --drop --file tmp/employees.json
```

# mongosh
```
test>  use node_express_db
node_express_db> db.sales.find().pretty() // shows 20 documents at time // use "it" for next set
node_express_db> db.employees.find().pretty()

Where clause:
db.sales.find({"quarter":1})
db.sales.find({"quarter":1, "category": 'Beverages'})

Scalar values [ fields]
db.sales.find({}, {"category":1})
```


mongodb: The official MongoDB driver for Node.js.

Mongoose
Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.

https://mongoosejs.com/docs/guide.html

Schemas:
Everything in Mongoose starts with a Schema. 
Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.

```
const blogSchema = new Schema({
  title: {
    type:String,
    required:true,
    minlength:4,
    maxlength:50
  }, // String is shorthand for {type: String}
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  }
});

const BlogModel = mongoose.model('Blog',blogSchema);
The first argument is the singular name of the collection your model is for. Mongoose automatically looks for the plural, lowercased version of your model name.

blogSchema ==> mapped to "blogs" collection

Using "BlogModel" we perform CRUD operations on collection

```

Mongoose Example:
```
const mongoose = require('mongoose');

const {connection} = mongoose;

mongoose.connect('mongodb://localhost:27017/node_express_db');

const EmployeeSchema = mongoose.Schema({
    id:Number,
    name:String,
    username:String,
    email:String,
    company:String
});

const EmployeeModel = mongoose.model('Employee', EmployeeSchema);

connection.once('connected', async () => {
    try {
        let docs = await EmployeeModel.find({});
        docs.forEach(employee => {
            console.log(employee);
        })
    } finally {
        await connection.close();
    }
});

//{"id":1,"name":"Leanne Graham","username":"Bret","email":"Sincere@april.biz","company":"Adobe"}

```
ExpressJS: Fast, unopinionated, minimalist web framework for Node.js
SSR ==> Web Applications --> to serve rendered pages to client
CSR ==> APIs ==> serves representation of state of resource [ JSON / XML]

```
npm init --y

npm i typescript express body-parser dotenv cookie-parser cors  bcrypt jsonwebtoken

npm i -D @types/express @types/body-parser @types/cookie-parser @types/cors @types/bcrypt ts-node

tsc --init

npm i -D @types/node
```

1) Get all products
GET http://localhost:3000/products

2) get product by id ==> use PathParameter
GET http://localhost:3000/products/4

3) get by category ==> Query Parameter
GET http://localhost:3000/products?category=mobile

4) Delete a product
DELETE  http://localhost:3000/products/3

5) update a product
PUT  http://localhost:3000/products/3
payload should contain new data for product with id "3" to be updated

6) add a new product
POST http://localhost:3000/products
ayload should contain new product data

Testing:
Browser:
http://localhost:3000/products/4
http://localhost:3000/products

POSTMAN
POST : http://localhost:3000/products
Headers:
Accept: text/plain
Content-type:application/json

Body(raw)
{
  "id": 20,
  "name": "LG Inverter AC",
  "price": 45000.00,
  "category": "Electrical"
}

Flow:

app.ts --> app.use(express.json()) Middleware -> ProductRoutes --> MiddleWare --> ProductController --> ProductService --> MongoDB

---

MongoDB or any other NoSQL --> Database for NodeJS
User data in MongoDB --> BSON of JSON
{
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
    }
},
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}
RDBMS --> methods on Stack will block any other async operations
Join 
User table
Company table
Address table

================

NodeJS --->  MongoDB driver {module} npm i --> MongoDB
NodeJS --->  Mongoose {ODM layer on top of MongoDB Driver} --> MongoDB

Create Schema to map to Collection {schema contains type of data, validation rules}
Schema --> Model { CRUD operations}

db.sales.find();
where "Sales" is the Model name
Sales.find();
Sales.create();
Sales.insert();

ExpressJS --> Web Framework

--------------------------------

npm i mongoose
npm i -D @types/mongoose
