const http = require('http');

const server = http.createServer((req,res) => {
 
 res.end("Hello!!!" + payload().toString());
});

const idSize = 20;

function payload () {
    let chars = ''
    let n = idSize
    const date = new Date().getMilliseconds()
    const radix = 36
    n *= n * idSize
    while (n--) {
      const num = date + n
      chars += num.toString(radix).toUpperCase()
    }
    const id = chars.slice(-idSize)
    return { date, id }
  }



server.listen(3000);

process.on('SIGINT', () => {
 server.close();
});
