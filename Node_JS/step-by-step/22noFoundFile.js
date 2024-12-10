let expre = require("express");
let path = require("path");
let app = expre();
// Typo corrected in the directory name
let publicPath = path.join(__dirname, "public");
// console.log(publicPath);
app.use(expre.static(publicPath));
// Changed the port number to 9092

app.get("/about.html", (_, res) => {
  res.sendFile(`${publicPath}/about.html`);
});

app.get("*", (_, res) => {
  res.sendFile(`${publicPath}/notfound.html`);
});

const PORT = 9092;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
