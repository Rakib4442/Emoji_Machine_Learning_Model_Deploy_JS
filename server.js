const http = require('http');
var fs = require('fs');
const tf = require('@tensorflow/tfjs');

const hostname = '127.0.0.1';
const port = 8000;

const server = http.createServer((req, res) => {
    fs.readFile('index.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});