const https = require('https');

const start = Date.now();

function doRequest() {
    https.request("https://jsonplaceholder.typicode.com/users", response => {
        response.on("data", (chunk) => {
          //  console.log(chunk.toString())
          // event.emit("sync", data);
        }),
        response.on("end", () => {
            console.log(Date.now() - start);
        })
    }).end();
}
// Thread pool is not used for any network based operations [socket]
// libuv uses Socket connection
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