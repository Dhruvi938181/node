const express=require("express")


const app=express()

app.set("view engine","ejs")
app.use(express.urlencoded())
// app.use(express.static(__dirname+"/public"))
var student=[
    // {
    //     id:1,
    //     name:"dhruvi"
    // },
    // {
    //     id:2,
    //     name:"dimpi"
    // }
]

app.get("/" ,(req,res)=>{
    // res.send("home page")
    res.render("home1",{student})
})


// app.get("/index" ,(req,res)=>{
//     // res.send("home page")
//     res.render("index")
// })


app.post("/insertData",(req,res)=>{
    const {name}=req.body
    const id=(student.length+1).toString()

    const obj={id,name}
    student.push(obj)


res.redirect("/")

})

app.get("/delete", (req, res) => {
  const id =req.query.id 
  const ans = student.filter((el, i) => {
    return el.id !== id;
  });

  student = ans;
  res.redirect("/");
});

app.get("/edit", (req, res) => {
  const id = req.query.id
  const ans = student.filter((el, i) => {
    return el.id == id;
  });
  res.render("edit1", { editData: ans[0] }); 
});

app.post("/editData1", (req, res) => {
  const { id, name } = req.body;

  
//   const {name}=req.body
// const obj={name} 
//   student.push(obj) 


student.forEach(stud=>{
    if(stud.id==id){
        stud.name=name
    }
})
res.redirect("/")
});





app.listen(7800,(req,res)=>{
    console.log("server listen")
})