var fs = require('fs'); // built-in module

// __filename and __dirname are nodejs env variables
var content = fs.readFileSync(__filename); // code executes on Stack

console.log(content.toString()); // blocked!!!!