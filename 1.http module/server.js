const http=require("http");
const fs=require('fs');

const server=http.createServer((request, response)=>{
    if(request.url==="/"){
        response.end("Welcome to home page")
    }
    else if(request.url==="/product"){
        response.write("Welcome to product page")
        response.end();
    }else if(request.url==="/data"){
        fs.readFile("./data.txt", {encoding:"utf-8"},(err, data)=>{
            if(err){
                response.end("something went wrong while reading the file...")
            }else{
                response.end(data)
            }
        })
        
    }
    else if(request.url==="/postData" && request.method=="POST"){
        let data="";
        request.on("data",(chuck)=>{
            data+=chuck
        })
        request.on("end", (chuck)=>{
            console.log(data)
            response.end("data received")
        })
    }
    else{
        response.statusCode(404).end("404 Not Found");
    }
})

server.listen(8080);

//res.write(), res.end();  req.on();

//what is utf-8 and utf8 encoding

/**
 * whenever we make any changes in code we have to start the server again by doing "node server.js"
 * so, if we have node version >=20 then, we can do "node server.js --watch" it will start the server again and again whenever we make any changes
 * but, we dont have node version >=20 thats why we can use nodemon
 */
/**
 * res.write karne se vo bhejega but res.end bhi use karna hoga
 * par res.end karte time he msg likhe toh same he hoga like res.end('abc')
 */

//bandwidth=> how much data can be transferred over the connection (net speed)
//latency=> latency means delay =>exmaple server mumbai mai h data transfer ho rha h goa mai and bihar mai toh bihar mai jada latency hogi as compare to goa 
//jo jitna nasdik hoga delay utna kam hoga 


/**
 * in what units can we measure the performance of our server?
 * 1. response time 
 * 2. how many requeset our server can handle per second
 */

/**
 * Benchmarking=>trying to test the limits like(knowing the max car speed, or max ram of phone etc)
 * 1. knowing the capacity of our server 
 * 2. for example how many request our server can handle.
 * 3. to know this have have one tool npm autocannon 
 * npm =>node package manager
 * npx=>node package execute
 * agar hume check krna hai humara server kiya req le skta h ek bar mai toh humko
 * cmd pe jana hoga and likhna hoga npx autocannon and apna url endpoint dena hoga jiska check krna hai 
 * for example localhost:8000/data or localhost:8080/ etc etc
 * 
 */