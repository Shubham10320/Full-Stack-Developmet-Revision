const express=require("express");
const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    name:{type:String, required:true},
    role:{type:String, enum:["student", "lecturer"], default:"student"},
    email:{type:String, required:true},
    password:{type:String, required:true}
})

const UserModel=mongoose.model("user", userSchema)

module.exports={
    UserModel
}