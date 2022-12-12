var fs = require('fs'); // built-in module

// hands it over to thread for thread pool, threads places (err,data) => {} on Callback queue
// for cb queue event-loop places it on to stack one by one
fs.readFile(__filename, (err, data) => {
    if(!err) {
        console.log(data.toString()); // complete data of file
    }
});  

console.log("Bye!!!"); // not blocked!!!!