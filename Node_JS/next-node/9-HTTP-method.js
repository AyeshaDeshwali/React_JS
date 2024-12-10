// ye sab HTTP methods hote hain jo client aur server ke beech communication mein istemal kiye jaate hain.
// GET: Server se data retrieve karne ke liye istemal hota hai.
// POST: Data ko server par submit karne ke liye istemal hota hai, jisse naya resource create kiya ja sakta hai ya phir koi action perform kiya ja sakta hai.
// PUT: Ek resource ko server par update karne ya naya resource create karne ke liye istemal hota hai.
// DELETE: Ek resource ko server se delete karne ke liye istemal hota hai.
// PATCH: Partial modifications ko apply karne ke liye istemal hota hai, jo ki PUT se chhote level ka modification hota hai.
// HEAD: GET request ke saath hi saman hota hai lekin sirf headers ko retrieve karta hai, actual content ko nahi.
// OPTIONS: Server par kis tarah ke operations support kiye jaate hain, uska information retrieve karne ke liye istemal hota hai.
// TRACE: Server par request ka echo karta hai, jo debugging mein upyogi hota hai.
// Yeh kuch common HTTP methods hain jo web development aur API interactions mein use hote hain.

let http = require("http");
let fs = require("fs");
let url = require("url");
http
  .createServer((req, res) => {
    let log = `${Date.now()}: ${req.method} ${req.url}\n`;
    let myUrl = url.parse(req.url, true);
    console.log(myUrl);
    fs.appendFile("hihi.js", log, (err, data) => {
      switch (myUrl.pathname) {
        case "/":
          if (req.method === "GET") {
            res.end("this is a home page");
          }
          break;
        case "/about":
          let username = myUrl.query.myname;
          res.end(`Hi ${username}`);
          break;
        case "/signup":
          if (req.method === "GET") {
            res.end("this is a signup form");
          } else if (req.method === "POST") {
            res.end("success");
          }
        default:
          res.end("page is not found 404");
          break;
      }
    });
  })
  .listen(2001, () => console.log("server is started!"));
