var http = require('http'); // built-in module
const url = require('url'); // built-in module
const {random} = require('lodash'); // 3rd party module in node_modules folder
const {add, subtract} = require('./math');

// http://localhost:3000/add?x=10&y=25 ==> "add" is path parameter; x and y are query parameters
// http://localhost:3000/subtract?x=100&y=25

var server = http.createServer( (request, response) => {
    var pathname = url.parse(request.url).pathname;
    var query = url.parse(request.url, true).query;
    if(pathname === '/add') {
        let result = add(parseInt(query.x) , parseInt(query.y));
        response.end(result.toString());
    } else if (pathname === '/subtract') {
        let result = subtract(parseInt(query.x) , parseInt(query.y));
        response.end(result.toString());
    } else {
        response.end(random(1,100).toString());
    }
});

server.listen(3000, () => console.log("server started!!! [ http://localhost:3000/] "));
