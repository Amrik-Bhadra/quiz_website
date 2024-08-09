const express = require('express');
const app = express();

const bodyparser = require('body-parser');


app.get('/', (req, res)=>{
    res.send('Hello World');
});

app.listen(3000);