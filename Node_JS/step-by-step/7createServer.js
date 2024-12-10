// 7createServer.js this file name

// let ans = require("fs");
// ans.writeFileSync("hello.js", 'console.log("hello")');

// global modules (core modules) ki category me aate hain.

// let ans = require("http");
// ans
//   .createServer((req, resp) => {
//     resp.writeHead(200, { "Content-Type": "applicationjson" });
//     resp.write(JSON.stringify({ name: "ayesha", email: "ayesha@gmail.com" }));
//     resp.end();
//   })
//   .listen(6001);

// let ans = require("http");
// function test(req, resp) {
//   resp.write("hello, world");
//   resp.end();
// }
// ans.createServer(test).listen(6005);

// let ans = require("http");
// let test = (req, resp) => {
//   resp.write("<h3>hi....</h3>");
//   resp.end();
// };
// ans.createServer(test).listen(6005);

// let ans = require("http");
// ans
//   .createServer((req, resp) => {
//     resp.write("hello ayesha deshwali");
//     resp.end();
//   })
//   .listen(6005);

// let ans = require("http");
// let test = (req, resp) => {
//   resp.write("<h1>hi.. hello</h1>");
//   resp.end();
// };
// ans.createServer(test).listen(6005);

// var http = require("http");
// http
//   .createServer(function (req, res) {
//     // add a HTTP header:
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.write("Hello World!");
//     res.end();
//   })
//   .listen(8080);
// console.log("hello");

// let ans = require("http");
// ans
//   .createServer((req, resp) => {
//     resp.writeHead(200, { "X-Name": "ayesha" });
//     resp.write("<h1>hello, world hi...</h1>");
//     resp.end();
//   })
//   .listen(6007);

// const ans = require("http");
// ans
//   .createServer((req, resp) => {
//     resp.writeHead(200, { "X-Name": "ayesha" }); // Custom response header field
//     resp.write("<h1>hello, world hi...</h1>");
//     resp.end();
//   })
//   .listen(6007);

// const a = require("fs").writeFileSync;
// a("simple.js", "console.log('hello world')");

// const fs = require("fs");

// fs.writeFile("asdf.html", "Hello, world!", (err) => {
//   if (err) throw err;
//   console.log("File has been saved!");
// });

var http = require("http");
var uc = require("upper-case");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(uc.upperCase("Hello World!"));
    res.end();
  })
  .listen(8080);
