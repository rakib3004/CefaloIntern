const express = require('express');
const app = express();
const admin = express();

const settings = require('./settings');

app.get('/settings', settings);

app.get('/', (req,res)=>{
    res.send("Welcome to CodeHouse");
})
app.use('/admin',admin);

admin.get('/profile', (req,res)=>{
    res.send("This is Admin Profile");
})

