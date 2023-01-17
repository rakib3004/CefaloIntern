const express = require('express');

const app = express();

app.enable('case sensetive routing');
app.disable('case sensetive routing');


app.param('id', (req, res, next, id)=>{

    const user = {

        userid:id,
        name:'Bangladesh'
    };

    req.userDetails= user;

    next();

});

app.get('/user/:id', (req,res)=>{

    res.send('welcome to application home');
});

app.listen(3000, ()=>{

    console.log('listening on port 3000');
})