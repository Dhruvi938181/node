const http=require("http")
http.createServer((request,response)=>{
    response.write("hello world")
    response.end()
}).listen(5000)

const http=require("http")
http.createServer((req,res)=>{
    const path=req.url
    const method=req.method
    console.log(path,method)

    if(path.includes("/abc") && path.method("GET")){
        res.write("home page")
        res.end()
    }

    else{
        res.write("contact")
        res.end()
    }
}).listen(9000)