// _________________________19 Connecting NodeJS with MongoDB | Mongoose + Express___________________________________

let express = require("express");
const { default: mongoose } = require("mongoose");
let app = express();
let port = 3001;
app.use(express.json());
mongoose
  .connect("mongodb://localhost:27017/college")
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((err) => {
    console.log("mongo error", err);
  });
let userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
  },
  job_title: {
    type: String, // Corrected field name to job_title
  },
});
let userModel = mongoose.model("students", userSchema);
app.use(express.urlencoded({ extended: false }));
app.post("/api/users", async (req, res) => {
  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).json({ msg: "All fields are required." });
  }
  let result = await userModel.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.job_title,
  });
  console.log("result", result);
  return res.status(201).json({ msg: "success" });
});
app.get("/users", async (req, res) => {
  const result = await userModel.find({});
  const html = `
    <ul>
    ${result
      .map((user) => `<li>${user.firstName} - ${user.email}</li>`)
      .join("")}
    </ul>`;

  res.send(html);
});

app.get("/api/users", async (req, res) => {
  const alldbusers = await userModel.find({});
  res.setHeader("X-MyName", "husain");
  return res.json(alldbusers);
});
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
