// How Node.js Work

// 1. CallStack
// 2. Node API
// 3. CallBack Queue

// node.js background me kam kase krta h jub program ko run krte h to wo kase execute hota h

console.log("starting...");
setTimeout(() => {
  console.log("hello");
}, 2000);
setTimeout(() => {
  console.log("zero");
}, 0);
console.log("ending....");
