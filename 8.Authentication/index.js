const express=require("express");
const { connection } = require("./config/db");
require("dotenv").config();
const jwt=require("jsonwebtoken");
const UserModel = require("./models/user.model");
const app=express();
app.use(express.json());


app.get('/', (req, res)=>{
    res.send("base url end point")
})

app.post('/login', async(req, res)=>{
    const {name, email, password}=req.body;
    const user=await UserModel.findOne({name, email, password})
    if(user){
        const token=jwt.sign({foo:"bar"}, process.env.SECRETKEY);
        console.log("token", token);
        res.send({"message": "success", "token":token})
    }else{
        res.send({"message":"login failed"})
    }

})


app.post('/signup', async(req, res)=>{
    try {
        const{name, email, password}=req.body;
        const new_user=new UserModel({name, email, password})
        await new_user.save();
        res.send("User Registered Successfully")
    } catch (error) {
        console.log("Error Caught while signup", error)
    }
})


app.post('/report', async(req, res)=>{
    const token=req.headers.authorization.split(" ")[1]
    console.log(token)

    jwt.verify(token, process.env.SECRETKEY, (err, decoded)=>{
        if(err){
            console.log('err', err)
        }else{
            console.log('decoded', decoded)
            res.send("here is report")
        }
    })

})


app.listen(process.env.PORT, async()=>{
    await connection
    console.log("connected successfully")
})