var fs = require("fs");
var http = require("http");

http
  .createServer(function (request, response) {
    fs.readFile("Perpustakaan.pdf", (err, data) => {
      if (err) throw err;

      response.writeHead(200, { "Content-Type": "application/pdf" });
      response.write(data);
      response.end();
    });
  })
  .listen(2000);

console.log("http://localhost:2000");
