let http = require("http");
let fs = require("fs");
http
  .createServer((req, res) => {
    let log = `${Date.now()} ${req.url} now requast\n`;
    fs.appendFile("hihi.js", log, (err, data) => {
      switch (req.url) {
        case "/":
          res.end("this is a home page");
          break;
        case "/about":
          res.end("this is a about page");
          break;
        case "/contact":
          res.end("this is a contact page");
        default:
          res.end("page is not found 404");
          break;
      }
    });
  })
  .listen(2000, () => console.log("server is started!"));

let http = require("http");
let fs = require("fs");
let url = require("url");
http
  .createServer((req, res) => {
    let log = `${Date.now()} ${req.url}\n`;
    let myUrl = url.parse(req.url, true);
    console.log(myUrl);
    fs.appendFile("hihi.js", log, (err, data) => {
      switch (myUrl.pathname) {
        case "/":
          res.end("this is a home page");
          break;
        case "/about":
          let username = myUrl.query.myname;
          res.end(`Hi ${username}`);
          break;
        default:
          res.end("page is not found 404");
          break;
      }
    });
  })
  .listen(2001, () => console.log("server is started!"));

// http://localhost:2001/about?myname=ayesha&user=1
