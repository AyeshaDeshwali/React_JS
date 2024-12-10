// Middleware Node.js mein HTTP request aur response ke beech mein sthit hota hai, jo unhe modify aur customize karne mein madad karta hai. Yeh server-side logic ko manage karne mein upayukt hota hai.
// const express = require("express");
// const app = express();
// const reqFilter = (req, resp, next) => {
//   if (!req.query.age) {
//     resp.send("please provide age");
//   } else if (req.query.age < 18) {
//     resp.send("you can not access this page");
//   } else {
//     next();
//   }
// };
// app.use(reqFilter);
// app.get("/", (req, resp) => {
//   resp.send("welcome to home page");
// });
// app.get("/users", (req, resp) => {
//   resp.send("welcome to users page");
// });
// app.listen(3040);
