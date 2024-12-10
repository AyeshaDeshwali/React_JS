// CURD - Create file, Read file, Update file, Delete file

// CURD  with file system
// Rename file CURD ka part nhi h

// Create file

// const fs = require("fs");
// const path = require("path");
// const folderPath = path.join(__dirname, "crud");
// const filePath = `${folderPath}/apple.txt`;
// fs.writeFileSync(filePath, "this is a simple file");

// Read file
// const fs = require("fs");
// const path = require("path");
// const folderPath = path.join(__dirname, "crud");
// const filePath = `${folderPath}/apple.txt`;
// fs.writeFileSync(filePath, "this is a simple file");
// fs.readFile(filePath, (err, item) => {
//   console.log(item);
// });
// fs.readFile(filePath, "utf-8", (err, item) => {
//   console.log(item);
// });

// appendFile
// fs.appendFile(filePath, " and file name is apple.txt", (err) => {
//   if (!err) console.log("file is updated"); // run krne se again append ho jayga texts file m
// });

// Rename file
// fs.rename(filePath, `${folderPath}/mango.txt`, (err) => {
//   if (!err) console.log("file name is updated");
// });

//  Delete file
// fs.unlinkSync(`${folderPath}/mango.txt`);
