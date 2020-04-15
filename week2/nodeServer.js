const http = require('http');
const dos = require("./dosDetector.js");
const myDos = new dos.DOS_Detector(3000);

myDos.on("DosDetected", event => {
    console.log(
      `Attack Found:URL: ${event.url} and Time: ${event.timeBetweenCalls}`
    );
  });

const server = http.createServer((req, res) => {
  if (req.url === '/api/os-info') {
    res.setHeader('Content-Type', 'application/json');
    //Return a response with OS-info, using the code implemented in part-a
    const sysInfo = require("./OS-info.js/index.js");
    response.write(JSON.stringify(sysInfo.sysInfo()));
    console.log(sysInfo.sysInfo());
    return res.end();
  }
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`<h2>Simple node HTTP server demo</h2>
      <p>Exposes this endpoint <code>/api/os-info</code></p>
    `);
    return res.end();
  }
});
server.on('connection', (sock) => {
  // You can get the client-IP in here, using sock.remoteAddress)
  console.log(sock.remoteAddress);
  myDos.addUrl(sock.remoteAddress);
});
server.listen(3000);
console.log('listening on 3000');
//Register for the "DosDetected" event and console.log the url and time info.
