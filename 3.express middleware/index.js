const express=require("express");
const { userRouter } = require("./routes/user.route");
const orderRouter = require("./routes/order.route");
const app=express();

// function firstMiddleware(req, res, next){
//     console.log("hello from first middleware")
//     next()
// }

// function timerMiddleware(req, res, next){
//     const startTime=Date.now()
//     next()
//     const endTime=Date.now()
//     console.log(endTime-startTime)
// }


// app.use(firstMiddleware)
// app.use(timerMiddleware)

app.get("/", (req, res)=>{
    res.send("home page");
})

app.use('/user', userRouter)
app.use('/order', orderRouter)

app.listen(8080, ()=>{
    console.log("listening on port 8080")
})


/**
 * middleware lies between req and res.
 * if we make request for /about or /contanct or any endpoint.
 * it will go to middleware then it will execute whatever code is written in middleware.
 * then it will execute next() if there is another middleware then next function will call to that middleware.
 * else it will directly call to the endpoint for which request is made.
 * 
 * 
 * app.use(middlewareFunction) jiss bhi line pe use karne middleware sirf use niche vale code ke liye aplicable hoga.
 * 
 */


/**
 * custom middleware => we create
 * inbuilt middleware => app.use(express.json()) to parse json 
 *                       app.use(express.text()) to parse text
 *                       app.use(express.router()) 
 * 
 * community middleware => developer develop and make available for another developers like cors, multer, morgan etc
 */