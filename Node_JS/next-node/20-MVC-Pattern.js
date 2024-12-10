const express = require("express");
const userRouter = require("./routes/user");
const { connectMongoDb } = require("./connection/connect");
const logReqRes = require("./middlewares/next");
const app = express();
const port = 3001;

app.use(express.json());
connectMongoDb("mongodb://localhost:27017/college").then(() =>
  console.log("mongodb is connected")
);
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes("logs.txt"));
app.use("/api/users", userRouter);

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
