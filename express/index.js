const express = require('express');

const app = express();
//app.set('port', process.env.PORT || 8888);

app.set('port', process.env.PORT || 8000);

app.get('/board', (req, res)=>{
    res.send('Board 입니다');
});

app.get('/login', (req, res)=>{
    res.send('Login 입니다');
});

app.get('/signup', (req, res)=>{
    res.send('SignUp 입니다');
});

app.get('', (req, res)=>{
    res.send('Hello World!');
});

app.listen(8000, ()=>{
    console.log('Start Express Server');
});