const http = require('http');

const server = http.createServer((req, res)=>{

    if(req.url=='/'){
        res.write('Hello World');
        res.end();
    }

    if(req.url=='/api/courses'){
        res.write(JSON.stringify([1,2,3]));
        res.end();

    }  
});

server.listen(3030);


console.log('This server is running on PORT 3000.....');

console.log('Hello World');




































































































