const mongoose=require("mongoose")
const user=mongoose.Schema({
    moviename:{
        type:String
    },
    ticketprice:{
        type:String
    }
})


const usermodel=mongoose.model("database",user)
module.exports=usermodel