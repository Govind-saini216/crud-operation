const express = require ('express');
const Data  = require('./Utils/Db');
const bodyparser = require ('body-parser');
const cors = require ('cors');
const Route = require('./Routes/userRoutes');
require('dotenv').config();


const app = express();
app.use(cors());
app.use(bodyparser.json());


// make a server 
const PORT = 8000 ; 

Data().then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is start now ${PORT}`);
    })
})

app.use('/api',Route);