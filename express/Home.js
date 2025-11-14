
const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.get("/index" ,(req,res)=>{
    // res.send("home page")
    res.render("index")
})


app.listen(7890, () => {
  console.log("server listen");
});