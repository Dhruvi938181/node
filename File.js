const fs=require("fs")
fs.writeFileSync("hello.txt","hello")


fs.appendFileSync("hello.txt","intro of nodejs")
// a=fs.readFileSync("hello.txt")
// console.log(a.toString())

// try{
//     fs.renameSync("hello.txt","new.txt")
//     console.log("success")
// }
// catch(err){
//     console.log(err)

// }

// fs.unlinkSync("new.txt")


// async

// fs.writeFile("hhh.txt","hello",(err,data)=>{

// if(err){
//     return console.error(err)

// }
// console.log("success")
// })


// fs.appendFile("hhh.txt","hhjchjfd",(err,data)=>{
//     if(err){
//         return console.error(err)
//     }
//     console.log("sucess")
// })

fs.readFile("hhh.txt",(err,data)=>{
    if(err){
        return console.error(err)
    }
    console.log(data.toString())
})


fs.rename("async.txt","hhh.txt",(err,data)=>{
    if(err){
        return console.error(err)
    }
    console.log("success")
})

fs.unlink("hhh.txt",(err,data)=>{
    if(err){
        return console.error(err)
    }
    console.log("success")
})

