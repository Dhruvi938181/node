const express=require("express")
const db=require("./config/db")
const app=express()
const U_router = require("../MVC-2/Routes/userRouter")

app.use(express.json())
app.use("/database",U_router)
app.listen(7800,()=>{
    console.log("server listen")
})