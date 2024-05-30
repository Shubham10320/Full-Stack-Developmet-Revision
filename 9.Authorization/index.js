const express=require("express")
const app=express();
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");
const { connection } = require("./config/db");
const { UserModel } = require("./model/user.model");
require("dotenv").config();

app.use(express.json())

app.get("/", (req, res)=>{
    res.send("Base url endpoint")
})


app.post("/signup", (req, res)=>{
    try {
        const {name, email, password, role}=req.body;
        bcrypt.hash(password, 4, async(error, hash)=>{
           if(error){
            console.log("Error Caught while hashing the password", error);
           }else{
            const new_user=new UserModel({
                name,
                email,
                password : hash, 
                role
            });
            await new_user.save();
            res.send({"message":"Registerd successfully"})
           }
        })
    } catch (error) {
        console.log("Error Caught while signup", error)
    }
})



app.post("/login", async(req, res)=>{
    try {
        const {email, password}=req.body;
        const is_user=await UserModel.findOne({email});
        if(is_user){ 
            bcrypt.compare(password, is_user.password, function(err, result) {
                if(err){
                    console.log("Error Caught while compare the hash password", err)
                }
                const token=jwt.sign({foo:bar}, process.env.SECRET);
                res.send({"message":"success", token:token})
            });
        }else{
            res.send("signup first")
        }
    } catch (error) {
        console.log('Error Caught while login', error);
    }
})


app.get("/lecture", async(req, res)=>{
    res.send("lecture")
})



app.listen(process.env.PORT, async()=>{
    try {
        await connection
        console.log("connected to database successfully")
    } catch (error) {
        console.log("Failed to connect to DB");
        console.log("Error Caught", error)
    }
})