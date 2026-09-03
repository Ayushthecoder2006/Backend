// const fs = require("fs")

// // Create file
// // fs.writeFileSync("index.txt", "Hello")

// // Delete file
// fs.unlinkSync("index.txt")

// // Create folder
// // fs.mkdirSync("folder")

// // Delete folder
// fs.rmdirSync("folder")


// let data = fs.readFileSync("index.txt")
// console.log(data.toString(),"hehehehehe");

// oprating System
// let os = require('os')
// total rem
// console.log(os.totalmem()/1024/1024/1024);
// console.log(os.freemem()/1024/1024/1024);
// console.log(os.cpus());
// console.log(os.arch());
// console.log(os.uptime()/3600);


let http = require('http')
let server = http.createServer((req,res)=>{
    res.write("Hello ")
    res.end("Hello")
})
server.listen(3000,()=>{
    console.log("server running......")
})



