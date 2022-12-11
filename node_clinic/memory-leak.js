const http = require('http');
var tasks = [];

const server = http.createServer((req, res) => {
    tasks.push(function() {
        return req.headers;
      });
    
      // Synchronously get user from session, maybe jwt token
      req.user = {
        id: 1,
        username: 'Master',
      };
      res.end('Hi ' + req.user.username);
      
  }
);

server.listen(3030);
