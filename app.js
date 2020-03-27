
const express = require('express');
const bodyParser = require('body-parser');


const app= express();

app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json());
app.get('/', (req,res) =>{
    res.send("Welcome !!!!!!!!!!!!!!!!!");
});

app.get('/:id',(req,res) =>{
    console.log(req.params);
    res.send('Your ID : ' + req.params.id);
})

app.get('/profile', (req,res) => {
    const user= {
        name:'Nguyễn Thanh Đức',
        age: 21,
        major: 'Information System',
        school: 'University of Information Technology'
    }
    res.send(user);
});

app.post('/profile', (req,res) => {
    console.log(req.body);
    res.send('SUCCESSSSSSSSSSSSSS !!!!!!!!!!!!');
});

app.listen(3000);