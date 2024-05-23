const mongoose=require("mongoose")
require("dotenv").config()


const userSchema=mongoose.Schema({
    name:String,
    age:Number,
    city:String
})

const UserModel=mongoose.model("user", userSchema);

const connection =mongoose.connect(process.env.MONGOURL)

module.exports={UserModel, connection}