const express=require('express')
const userRouter=express.Router();
const {UserModel}=require('../model/user.model')

userRouter.get("/", async(req, res)=>{
    let all_user=await UserModel.find();
    res.send(all_user)
})


userRouter.post('/add', async(req, res)=>{
    const body=req.body;
    const new_user=await UserModel.insertMany(body);
    res.send("user added successfully")
})

module.exports=userRouter