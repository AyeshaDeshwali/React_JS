// _________________________ 13 _Building REST API's using Node and Express.js____________________________________

let users = require("./MOCK_DATA.json");
let express = require("express");
let app = express();
let port = 3000;
app.get("/users", (req, res) => {
  const html = `
  <ul>
  ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
  </ul>
  `;
  res.send(html);
});
app.get("/api/users", (req, res) => {
  res.json(users);
});
app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  return res.json(user);
}); // http://localhost:3000/api/users/3  id Dynamics 1 2 3 4 kitne b de skte h 1000 tk kunki 1000 tk hi data store hai
app.post("/api/users", (req, res) => {
  res.json({ status: "pending post" });
});
app.patch("/api/users", (req, res) => {
  res.json({ status: "pending patch" });
});
app.delete("/api/users", (req, res) => {
  res.json({ status: "pending delete" });
});
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
