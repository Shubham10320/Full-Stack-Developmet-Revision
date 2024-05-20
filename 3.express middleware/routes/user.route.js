const express=require('express');
const userRouter=express.Router();


userRouter.get('/', (req, res)=>{
    res.send("welcome to user router endpoint")
})

userRouter.post('/addUser', (req, res)=>{
    res.send("user added successfully")
})

module.exports={userRouter}