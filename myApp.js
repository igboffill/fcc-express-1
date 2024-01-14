require('dotenv').config();
let express = require('express');
let app = express();

app.use('/public', express.static(__dirname + '/public'));

app.use('/', (req, res, next)=>{
    console.log(req.method + ' ' + req.path + ' - '  + req.ip);
    next();
})

app.get('/', (req, res)=>{res.sendFile(__dirname + '/views/index.html')});

app.get('/json', (req, res)=>{
    let msg =  "Hello json";
    if(process.env.MESSAGE_STYLE === 'uppercase'){
        msg = msg.toUpperCase();
    }
    res.json({ "message":  msg})
});





































 module.exports = app;
