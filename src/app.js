const express = require ('express');
const morgan = require('morgan');
const app = express();

app.listen(6000, () =>{
    console.log('API port 6000 listening...');
});


