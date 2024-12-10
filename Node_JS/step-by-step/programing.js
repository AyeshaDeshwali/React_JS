// console.log("Hello");
// const fs = require("fs");
// fs.readFile("./txt.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(data);
//     console.log("hi...");
//   }
// });

// try {
//   console.log("Hello");
//   const fs = require("fs");
//   const data = fs.readFileSync("./txt.txt", "utf-8");
//   console.log(data);
//   console.log("hi...");
// } catch (err) {
//   console.error(err);
// }

// let path = require("path");
// let a = path.extname("./node-tut/index.js");
// console.log(a);

// let path = require("path");
// let a = path.basename("/home/dell/dell-Latitude-E7450/node-tut/index.js");
// console.log(a);

// let dirPath = require("path");
// let b = dirPath.dirname("/home/dell/dell-Latitude-E7450/node-tut/index.js");
// console.log(b);

// let os = require("os");
// console.log(os.freemem());

// let os = require("os");
// console.log(os.totalmem());

// let os = require("os");
// console.log(os.hostname());

// let os = require("os");
// console.log(os.homedir());

// let os = require("os");
// console.log(os.homedir());

// let process = require("process");
// let ans = process.argv;
// // console.log(ans);

// console.log(__dirname);
// console.log(__filename);

// let http = require("http");
// let server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.write("This is the home page");
//     res.end();
//   } else if (req.url === "/about") {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.write("This is the about page");
//     res.end();
//   } else if (req.url === "/contact") {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.write("This is the contact page");
//     res.end();
//   } else if (req.url === "/bloge") {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.write("This is the blog page");
//     res.end();
//   } else if (req.url === "/project") {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.write("This is the project page");
//     res.end();
//   } else {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.write("Not Found");
//     res.end();
//   }
// });
// server.listen(2323, () => {
//   console.log("Server is running on port 2323");
// });

// let http = require("http");
// let fs = require("fs");
// let home = fs.readFileSync("./form.html", "utf-8");
// let server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end(home);
//   } else if (req.url === "/about") {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.write("This is the about page");
//     res.end();
//   } else {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.write("Not Found");
//     res.end();
//   }
// });
// server.listen(2323, () => {
//   console.log("Server is running on port 2323");
// });
