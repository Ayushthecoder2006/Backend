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






// let http = require('http')
// let server = http.createServer((req,res)=>{
//     res.write("Hello ")
//     // res.end("Hello")
//     if(req.url=='/') res.end("Hello")
//     else if(req.url=='/about') res.end("\nAbout")
// })
// server.listen(3000,()=>{
//     console.log("server running......")
// })



let express = require('express')
let app = express()

// app.use((req,res,next)=>{
//     console.log("Mai nhi jane dunga");
//     next()
    
// })
// app.use((req,res,next)=>{
//     console.log("Mai to bilkul nhi jane dunga");
    
// })

app.get('/',(req,res)=>{
    res.send("slash from get")
})

app.post('/',(req,res)=>{
    res.send("slash from post")
})

app.post('/about',(req,res)=>{
    res.send("about from post")
})
app.get('/about',(req,res)=>{
    res.send("about from get ")
})

app.listen(3000,()=>{
    console.log("Server chalu ho gya");
    
})