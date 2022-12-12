const crypto = require('crypto'); // built-in predefined module

const start = Date.now();

crypto.pbkdf2('test123', 'topsecret', 100000, 512, 'sha512', function(err, key ) {
    console.log("1: " , Date.now() - start);
});

crypto.pbkdf2('test123', 'topsecret', 100000, 512, 'sha512', function(err, key ) {
    console.log("2: " , Date.now() - start);
});

crypto.pbkdf2('test123', 'topsecret', 100000, 512, 'sha512', function(err, key ) {
    console.log("3: " , Date.now() - start);
});

crypto.pbkdf2('test123', 'topsecret', 100000, 512, 'sha512', function(err, key ) {
    console.log("4: " , Date.now() - start);
});

crypto.pbkdf2('test123', 'topsecret', 100000, 512, 'sha512', function(err, key ) {
    console.log("5: " , Date.now() - start);
});