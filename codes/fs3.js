var fs = require('fs'); // built-in module

var stream = fs.createReadStream(__filename);

stream.on('data', chunk => {
    console.log(chunk.toString()); // can execute multiple times based on file size
});

stream.on('end', () => {
    console.log("Done!!!")
})