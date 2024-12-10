// Asynchronous data ko handle kase kr ske h node.js ke applicaation m
// node.js is a Asynchronous Programming Language

// let a = 10;
// let b = 0;
// setTimeout(() => {
//   b = 20;
// }, 2000);
// console.log(a + b); // 10

let a = 20;
let b = 0;
let waitingData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(30);
  }, 2000);
});
// waitingData.then((data) => {
//   console.log(a + data);
// });
// donu sem hi h kase b kro data=b ya fir a+data
waitingData.then((data) => {
  b = data;
  console.log(a + b);
});

// let a = 10;
// let b = 0;
// let prom = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(30);
//   }, 2000);
// });
// prom.then((data) => {
//   console.log(a + data);
// });
