// let arr = [1, 2, 3, 4, 1, 2, 3];
// let ans = [];
// for (let val of arr) {
//   if (ans.includes(val)) {
//     continue;
//   } else {
//     ans.push(val);
//   }
// }
// console.log(ans);

// let arr = [1, 2, 3, 4, 6, 7, 8, 1, 2, 3, 4];
// let set = new Set(arr);
// console.log(...set);

// let arr = [1, 2, 3, 4, 6, 7, 8, 1, 2, 3, 4];
// let set = new Set(arr);
// console.log([...set]);

// let arr = [1, 2, 3, 7, 89, 12, 45, 76, 31, 89];
// let odd = arr.filter((val) => val % 2 === 1);
// let even = arr.filter((val) => val % 2 === 0);
// let ans = even.concat(odd);
// console.log(ans);
// console.log(odd);
// console.log(even);

// let arr = [1, 4, 6, 8, 2, 3, 43, 67, 9, 2, 4];
// let ans = [];
// let uniqueSet = new Set();

// for (let val of arr) {
//   if (!uniqueSet.has(val)) {
//     uniqueSet.add(val);
//   } else {
//     ans.push(val); // Duplicate value
//   }
// }

// console.log("Duplicates:", ans);

// let arr = [1, 2, 356, 78, 2, 5, 68, 73, 1, 2];
// let emp = [];
// let set = new Set();
// for (let val of arr) {
//   if (set.has(val)) {
//     emp.push(val);
//   } else {
//     set.add(val);
//   }
// }
// console.log(emp);

// let str = "ayesha deshwali";
// let ans = "";
// for (let i = str.length - 1; i > 0; i--) {
//   ans += str[i];
// }
// console.log(ans);

// let str = "Ayesha Deshwali";
// let result = "";
// for (let i = 0; i < str.length; i++) {
//   if (str[i].toUpperCase() == str[i]) {
//     result += str[i].toLowerCase();
//   } else {
//     result += str[i].toUpperCase();
//   }
// }
// console.log(result);

// function test(str) {
//   let ans = "";
//   for (let i = str.length - 1; i > 0; i--) {
//     ans += str[i];
//   }
//   return ans;
// }
// let ans = test("ayesha deshwali");
// console.log(ans);

// function test(str) {
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i].charAt(0).toUpperCase() == str[i]) {
//       result += str[i].toLowerCase();
//     } else {
//       result += str[i].toUpperCase();
//     }
//   }
//   return result;
// }
// console.log(test("AyesHa Deshwali"));

// let x = 10;
// if (x == 10) {
//   console.log("matched");
// }

// let y = "10";
// if (y === 10) {
//   console.log("matched");
// } // false ke case me kuch nhi dikega else me likne se dikne se dikega

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

// for (let i = 0; i <= 10; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// let i = 1;
// while (i <= 10) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
//   i++;
// }

// let i = 0;
// do {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
//   i++;
// } while (i <= 10);

// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum);

// let arr = [1, 2, 3, 4, 5, 78, 4, 23];
// arr.filter((val) => {
//   console.log(val);
// });

// let arr = [1, 2, 3, 4, 5, 78, 3, 4, 23, 3];
// let rusult = arr.filter((val) => {
//   return val === 3;
// });
// console.log(rusult);

// let arr = [1, 2, 3, 4, 5, 78, 3, 4, 23, 3];
// let rusult = arr.filter((val) => {
//   return val > 5;
// });
// console.log(rusult);

// let arr = [1, 3, 4, 5, 2];
// let ans = arr.reduce((a, b) => {
//   return a + b;
// });
// console.log(ans);
