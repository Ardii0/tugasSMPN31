var fs = require("fs");
var http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    // res.write(
    //   "<center><a href=/home><button> Home </button></a> <a href=/about><button> About </button></a> <a href=/profile><button> Profile </button></a></center>"
    // );

    var url = req.url;

    if (url === "/") {
      fs.readFile("Home.html", function (err, data) {
        res.end(data);
      });
    } else if (url === "/profile") {
      fs.readFile("Profile.html", function (err, data) {
        res.end(data);
      });
    } else if (url === "/sambutan") {
      fs.readFile("Sambutan.html", function (err, data) {
        res.end(data);
      });
    } else if (url === "/visi-misi") {
      fs.readFile("visiMisi.html", function (err, data) {
        res.end(data);
      });
    } else if (url === "/blog") {
      fs.readFile("Blog.html", function (err, data) {
        res.end(data);
      });
    } else if (url === "/perpustakaan") {
      res.writeHead(200, { "Content-Type": "application/pdf" });
      fs.readFile("pdf/perpustakaan.pdf", function (err, data) {
        res.end(data);
      });
    } else {
      res.write("<center>404 Not Found</center>");
      res.end();
    }
  })
  .listen(8000, function () {
    console.log("server running on http://localhost:8000");
  });
