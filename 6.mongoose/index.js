const express=require('express');
const {connection}=require("./config/db")
const {UserModel}=require("./model/user.model")
const app=express();
const userRouter=require("./routers/user.router")
app.use(express.json())


app.use('/user', userRouter)


app.listen(8080, async()=>{
    try {
        await connection;
        console.log("connected successfully")
    } catch (error) {
        console.log('failed to connect to db')
        console.log(error);
    }
})