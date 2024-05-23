const express=require('express');
const { UserModel, connection } = require('./db/db');
const app=express();

app.use(express.json())

app.get("/", async(req, res)=>{
    let all_user=await UserModel.find();
    res.send(all_user)
})


app.post('/user/add', async(req, res)=>{
    const body=req.body;
    const new_user=await UserModel.insertMany(body);
    res.send("user added successfully")
})


app.listen(8080, async()=>{
    try {
        await connection;
        console.log("connected successfully")
    } catch (error) {
        console.log('failed to connect to db')
        console.log(error);
    }
})