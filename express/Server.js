const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded());

var student = [
  {
    id: 1,
    name: "dhruvi",
  },
  {
    id: 2,
    name: "nirali",
  },
];

app.get("/", (req, res) => {
  res.render("home", { student });
});

app.post("/insertData", (req, res) => {
  const { id, name } = req.body;
  const obj = { id, name };
  student.push(obj);
  res.redirect("/");
});

app.get("/delete", (req, res) => {
  const id =req.query.id 
  const ans = student.filter((el, i) => {
    return el.id !== id;
  });

  student = ans;
  res.redirect("/");
});

app.get("/edit", (req, res) => {
  const id = Number(req.query.id);
  const ans = student.filter((el, i) => {
    return el.id == id;
  });
  res.render("edit", { editData: ans[0] }); 
});

app.post("/editData", (req, res) => {
  const { id, name } = req.body;

  
//   const {name}=req.body
// const obj={name} 
//  console.log(req.body)
//   student.push(obj) 
// res.redirect("/")


student.forEach(stud=>{
    if(stud.id==id){
        stud.name=name
    }
})
res.redirect("/")


  

});

app.listen(7890, () => {
  console.log("server listen");
});
