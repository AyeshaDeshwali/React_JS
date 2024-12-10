// _______________14___Introduction to POSTMAN for REST API's______________________________

let users = require("./MOCK_DATA.json");
let express = require("express");
let fs = require("fs");
let app = express();
let port = 3000;
app.use(express.urlencoded({ extended: false }));
app.post("/api/users", (req, res) => {
  let body = req.body;
  users.push({ ...body, id: users.length + 1 });
  fs.writeFileSync("./MOCK_DATA.json", JSON.stringify(users));
  return res.json({ status: "success", id: users.length });
});
app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  return res.json(user);
});
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
