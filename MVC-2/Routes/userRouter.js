const express=require('express')
const { register, get, deleteData, editData } = require('../Controller/usercontroller')

const U_router=express.Router()
U_router.post("/register",register)
U_router.get("/all",get)
U_router.delete("/:id",deleteData)
U_router.patch("/update/:id",editData)
module.exports=U_router