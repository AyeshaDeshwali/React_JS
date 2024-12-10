const EventEmitter = require("events");
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
const hi = () => {
  console.log("Hello, world!");
};
myEmitter.addListener("hello", hi);
myEmitter.removeListener("hello", hi);





const EventEmitter = require("events");
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on("hello", () => {
  console.log("Hello, world!");
});
myEmitter.once("hello", () => {
  console.log("Hello, world!");
});
myEmitter.removeListener("hello", () => {
  console.log("Hello, remove!");
});
myEmitter.emit("hello");



const express = require("express");
const EventEmitter = require("events");
let app = express();
const events = new EventEmitter();
let count = 0;
events.on("countAPI", () => {
  count++;
  console.log("event called ", count);
});
app.get("/", (req, res) => {
  res.send("hello home api");
  events.emit("countAPI");
});
app.get("/search", (req, res) => {
  res.send("hello search api");
  events.emit("countAPI");
});
app.get("/update", (req, res) => {
  res.send("hello update api");
  events.emit("countAPI");
});
app.listen(2030);
