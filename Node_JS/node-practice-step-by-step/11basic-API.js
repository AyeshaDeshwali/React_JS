// let ans = require("http");
// ans
//   .createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.write(JSON.stringify({ name: "ayesha", email: "ayesha@test.com" }));
//     res.end();
//   })
//   .listen(5000);

// response.writeHead(statusCode, headers) Node.js me ek HTTP response ke liye use hota hai. Is function ke 2 parameters hote hain:
// statusCode: HTTP response ka status code, jaise ki 200 (OK), 404 (Not Found), 500 (Internal Server Error), etc.
// headers (optional): HTTP response headers ka object, jisme aap response ke content type, encoding, cookies, cache control, aur anya headers specify kar sakte hain.

let ans = require("http");
const data = require("./data");
ans
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(data));
    res.end();
  })
  .listen(5000);
