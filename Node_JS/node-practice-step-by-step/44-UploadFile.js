let express = require("express");
let multer = require("multer");
let path = require("path");
let app = express();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  return res.render("uploadPage", { message: "" });
});
app.post("/upload", upload.single("profile"), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  if (req.file) {
    return res.render("uploadPage", { message: "File uploaded successfully!" });
  } else {
    return res.render("uploadPage", { message: "Error uploading file!" });
  }
});
app.listen(3040);
