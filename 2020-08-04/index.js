const http = require('http');

const server = http.createServer((_, resp) => {
  resp.end('{"ok": true}');
});

server.listen(3000);

// console.log(process.env.OMG);
// console.log([].flat);

