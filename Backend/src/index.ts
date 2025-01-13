import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config(); //fetch the value from .env file

const port = process.env.PORT || 500;

const app = express();


//get api
app.get("/",(req,res)=>{
   res.send("Hello world!");
});

app.get('/api',(req,res)=>{
    res.send({name:'pratima',age:25})
})

app.listen(port, ()=>{
    console.log(`Server connected successfully to the port 500`);
})
