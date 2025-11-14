// const http=require("http")
// http.createServer((request,response)=>{
//     response.write("hello world !")
//     response.end();
// }).listen(3000)

// const http=require('http')
// http.createServer((req, res) =>{
//     if (req.url === "/") {
//     res.write("This is Home Page");
//   }
//   else if (req.url === "/about") {
//     res.write("This is About Page");
//   }
//   else if (req.url === "/contact") {
//     res.write("This is Contact Page");
//   }
//   else {
//     res.write("404 Page Not Found");
//   }

//   res.end();
// }).listen(3000)


const http=require('http')
http.createServer((req, res) =>{

  const path=req.url;
  const method =req.method;
  console.log(path,method);

    if (path.includes("/abc") && method == "GET") {
      res.write("This is Home Page");
      res.end();
  }
  
  else {
    res.write("conatct page");
    res.end();
  }

}).listen(9000)