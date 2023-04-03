const crypto = require('crypto'); // built-in module --> import

const start = Date.now();

crypto.pbkdf2('Welcome123', 'topsecret', 100000, 512, 'sha512', (err, keydef) => {
    console.log("1:", Date.now() - start + " ms");
});

crypto.pbkdf2('Welcome123', 'topsecret', 100000, 512, 'sha512', (err, keydef) => {
    console.log("2:", Date.now() - start + " ms");
});

crypto.pbkdf2('Welcome123', 'topsecret', 100000, 512, 'sha512', (err, keydef) => {
    console.log("3:", Date.now() - start + " ms");
});

crypto.pbkdf2('Welcome123', 'topsecret', 100000, 512, 'sha512', (err, keydef) => {
    console.log("4:", Date.now() - start + " ms");
});

// will have to wait until one of the thread is released back to pool
crypto.pbkdf2('Welcome123', 'topsecret', 100000, 512, 'sha512', (err, keydef) => {
    console.log("5:", Date.now() - start + " ms");
});
