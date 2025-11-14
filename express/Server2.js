const express=require("express")
const app=express();
app.use(express.urlencoded())
app.set("view engine","ejs")
app.get("/",(req,res)=>{
  // res.send("home page")
  res.render("home2",{student})
})

app.post("/insertData",(req,res)=>{
    const {name}=req.body
    const id=(student.length+1).toString();
    const obj={id,name}
    student.push(obj)
    res.redirect("/")


})


app.get("/delete",(req,res)=>{
  const id=req.query.id
  const ans=student.filter((el,i)=>{
    return el.id!==id
  })
  student=ans
  res.redirect("/")

})

app.get("/edit",(req,res)=>{
  const id=req.query.id
  const ans=student.filter((el,i)=>{
    return el.id==id
  })
  res.render("edit2",{editData:ans[0]})

})


app.post("/editData",(req,res)=>{
    const {id,name}=req.body
    student.forEach((stud)=>{
      if(stud.id==id){
        stud.name=name
      }
    })
    
    res.redirect("/")


})
var student=[{id:1,name:"dhruvi"}]

app.listen(4800,()=>{
  console.log("server listen")
})