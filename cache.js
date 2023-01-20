const express = require('express')

const fetch = require('node-fetch')

const NodeCache = require('node-cache')

const myCache = new NodeCache({stdTT: 1, checkperiod:1})

const app = express()

const PORT = 3000


const todoUrl = "https://jsonplaceholder.typicode.com/todos"

app.get("/todos", (req,res)=>{

    if(myCache.has("todos")){
        console.log("Getting it from Cache");
        return res.send(myCache.get("todos"));
    }
    else{
        fetch(todoUrl)
        .then((response) => response.json())
        .then((json) => {
            myCache.set("todos", json);
            console.log("Getting it from Server");
            res.send(json);
        });
    }
    
});

app.get("/stats", (req,res)=>{

res.send(myCache.getStats());

})

app.listen(PORT, ()=>{
    console.log(`Example server is running at PORT ${PORT}`);
})