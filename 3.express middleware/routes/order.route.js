const {Router}=require('express');
const orderRouter=Router();

orderRouter.get("/", (req, res)=>{
    res.send("wlcm to order router")
})

orderRouter.post("/orderAdd", (req, res)=>{
    res.send("order added")
})

module.exports=orderRouter