const fs = require("fs")

// Create file
// fs.writeFileSync("index.txt", "Hello")

// Delete file
fs.unlinkSync("index.txt")

// Create folder
// fs.mkdirSync("folder")

// Delete folder
fs.rmdirSync("folder")