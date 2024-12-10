// ______________________________15___Express Middleware__________________________________
// let users = require("./MOCK_DATA.json");
// let express = require("express");
// let fs = require("fs");
// let app = express();
// let port = 3000;
// app.use(express.urlencoded({ extended: false }));

// app.use((req, res, next) => {
//   fs.appendFile(
//     "logs.txt",
//     `\n ${Date.now()}: ${req.method}: ${req.path}`,
//     (err, data) => {
//       next();
//     }
//   );
// });

// app.use((req, res, next) => {
//   req.myName = "ayesha.dev";
//   console.log("hello from md 1", req.myName);
//   next();
// });

// app.use((req, res, next) => {
//   console.log("hello from md 2", req.myName);
//   next();
// });

// app.get("/api/users", (req, res) => {
//   console.log("hello i am ", req.myName);
//   res.json(users);
// });

// app.get("/api/users/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const user = users.find((user) => user.id === id);
//   return res.json(user);
// });

// app.listen(port, () => {
//   console.log(`server is running on ${port}`);
// });
