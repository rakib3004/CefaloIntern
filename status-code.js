// informational responose 1xx
// successfull response 2xx
// redirects response 3xx
// client error 4xx
// server error 5xx
const express = require('express');

const app = express();

app.get('/admin', (req,res)=>{

    //res.send("<h1>Welcome to Admin Pannel<h1/> </br> <h2>Rational Stories<h2/>");

    res.writeHead(475, {'Content-Type': 'text/rakibium-text'});
    res.write("hello");
    res.end();
});

const PORT = 2023;


app.listen(PORT, ()=>{

    console.log('listening on port 3000');
})