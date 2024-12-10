const fs = require("fs");
fs.writeFileSync("hello.js", "this is a hello file");

const fs = require("fs");
let path = require("path");
let folderPath = path.join(__dirname, "13DisplayFiles");
// fs.writeFileSync(folderPath + `/hello.txt`); // one file banane ke liy

let fs = require("fs");
let path = require("path");
let folderPath = path.join(__dirname, "13DisplayFiles");
for (let i = 0; i < 5; i++) {
  fs.writeFileSync(folderPath + `/hello${i}.js`); // one se jayda files bnane ke liy
}

let fs = require("fs");
let path = require("path");
let folderPath = path.join(__dirname, "13DisplayFiles");
for (let i = 0; i < 5; i++) {
  fs.writeFileSync(folderPath + `/hello${i}.js`); // one se jayda files bnane ke liy
}
// fs.readdir(folderPath, (err, files) => {
//   console.log(files);
// });
fs.readdir(folderPath, (err, files) => {
  files.forEach((items) => {
    console.log(items);
  });
});

Synchronous Example:

const fs = require("fs");

// Reading a file synchronously
const data = fs.readFileSync("example.txt", "utf8");
console.log("Content of the file:", data);

// Creating a file synchronously
fs.writeFileSync("newfile.txt", "This is a new file created synchronously.");

// Updating a file synchronously
fs.appendFileSync(
  "example.txt",
  "\nAdditional content appended synchronously."
);

// Deleting a file synchronously
fs.unlinkSync("oldfile.txt");
// Renaming a file synchronously
fs.renameSync("oldfile.txt", "newfile.txt");

Asynchronous Example:

const fs = require("fs");
// Reading a file asynchronously
fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log("Content of the file:", data);
});

// Creating a file asynchronously
fs.writeFile(
  "newfile.txt",
  "This is a new file created asynchronously.",
  (err) => {
    if (err) throw err;
    console.log("File created successfully.");
  }
);

// Updating a file asynchronously
fs.appendFile(
  "example.txt",
  "\nAdditional content appended asynchronously.",
  (err) => {
    if (err) throw err;
    console.log("File updated successfully.");
  }
);

// Deleting a file asynchronously
fs.unlink("oldfile.txt", (err) => {
  if (err) throw err;
  console.log("File deleted successfully.");
});

// Renaming a file asynchronously
fs.rename("oldfile.txt", "newfile.txt", (err) => {
  if (err) throw err;
  console.log("File renamed successfully.");
});
