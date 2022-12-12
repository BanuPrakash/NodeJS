/* 
 This code doesn't use Thread pool. 
 Rather it uses OS Async Helpers --> Socket connection
*/

const https = require('https');

const start = Date.now();

function doRequest() {
    https.request("https://www.google.com", function(response) {
        response.on('data', function() {});
        response.on('end', function() {
            console.log(Date.now() - start);
        });
    }).end();
}

doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();

doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();