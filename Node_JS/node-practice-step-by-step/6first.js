// Core Modules

// Node.js mein "Core Modules" ek set hote hain jo Node.js runtime ke sath aate hain aur aap unka upayog bina kisi additional installation ke kar sakte hain. Ye modules essential functionality pradan karte hain aur alag-alag kisam ke tasks ko asaan bana dete hain

// Core Modules:
// fs - File System Module
// http - HTTP Module
// https - HTTPS Module
// path - Path Module
// os - Operating System Module
// events - Events Module
// util - Utility Module
// crypto - Cryptography Module
// url - URL Module
// querystring - Query String Module

// Global ase Module hote h jinko import krne ke jrurat nhi hoti
// console.log("ayesha deshwali");
// fs.writeFileSync("hello.txt", "ayesha deshwali");

// fs module Node.js ka ek core module hai, isliye aapko ise explicitly require karna hoga

// const fs = require("fs"); // file bnaen ke liy krne h fs
// fs.writeFileSync("hello2.txt", "saddam husain");
// const fs = require("fs");
// fs.writeFileSync("index.html", "i am a good girl");

// const fs = require("fs");
// console.log(__dirname); /// /home/dell/dell-Latitude-E7450/node-tut
// console.log("->>", __dirname);
// console.log(__filename); ///home/dell/dell-Latitude-E7450/node-tut/first.js  // file name b deta h sath me

// console.log("->>", __filename);
// const fs = require("fs");
// fs.writeFileSync("exam.js", "let i = 10;");

// const a = require("fs").writeFileSync;
// a("simple.js", "console.log('hello world')");

// try {
//   const fs = require("fs");
//   fs.writeFileSync("hello.txt", "ayesha deshwali");
//   console.log("File written successfully.");
// } catch (error) {
//   console.error("Error writing the file: ", error);
// }
