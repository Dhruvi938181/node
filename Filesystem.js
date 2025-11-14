const fs=require("fs")
fs.writeFileSync("hii.txt","hello")


// fs.appendFileSync("hii.txt","i am dhruvi")

// const a=fs.readFileSync("hii.txt")
// console.log(a.toString())


// fs.renameSync("dhruvi.txt","hii.txt")


// fs.unlinkSync("dhruvi.txt")


// async


// fs.writeFile("async.txt","hello",(err,data)=>{
//     if(err){
//         return console.error(err)
//     }
//     console.log("success")
// })


// fs.appendFile("async.txt","i am dhruvi",(err,data)=>{
//     if(err){
//         return console.error(err)
//     }
//     console.log("success")
// })

// fs.rename("async.txt","asy.txt",(err,data)=>{
//     if(err){
//         return console.error(err)
//     }
//     console.log("success")
// })

// fs.readFile("asy.txt",(err,data)=>{
//     if(err){
//         return console.error(err)
//     }
//     console.log(data.toString())
// })

fs.unlink("asy.txt",(err,data)=>{
    if(err){
        return console.error(err)
    }
    console.log("success")
})
