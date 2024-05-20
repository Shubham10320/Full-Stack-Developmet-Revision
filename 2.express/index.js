
const express=require("express");
const fs=require("fs");
const { parse } = require("path");

const app=express();

app.use(express.json());  //it is a middleware;

app.get("/", (request, response)=>{
    response.send("hello express.js")
})

app.post("/postdata", (request, response)=>{
    const paylaod=request.body;
    fs.writeFile("./data.txt", JSON.stringify(paylaod), {encoding:"utf-8"}, (err, data)=>{
        if(err){
            response.send("Something went wrong!")
        }else{
            response.send("Data received successfully")
        }  
    })
})


app.get('/students', (request, response)=>{
    fs.readFile("./db.json", "utf-8", (err, data)=>{
        if(err){
            response.send("something went wrong")
        }
        const parsed_data=JSON.parse(data);
        response.send(JSON.stringify(parsed_data.students))
    })
})


app.post("/addStudent",(req, res)=>{
    const payload=req.body;
    fs.readFile("./db.json", "utf-8", (err, data)=>{
        if(err){
            res.send("something went wrong")
        }else{
            const parsedData=JSON.parse(data);
            const answer=parsedData.students;
            answer.push(payload)
           
            fs.writeFile("./db.json", JSON.stringify({answer}), "utf-8", (err, data)=>{
                console.log("data upload success")
            })
        }
    })

    
    res.send("data received")
})


app.listen(8080, ()=>{
    console.log("listening on port 8080")
});


/*
""over the req, res which datatype we should prefer, its string because only
string datatype is same in every languages. ""

what is query? 
www.google.com?movie=sultan => after question mark whatever is written is know as query

what is params?
https://populationofindia.com/3 => this is params 
*/