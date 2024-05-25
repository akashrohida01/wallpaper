const express = require("express");
const port = 4000;
const multer = require("multer");
const mongoose = require("mongoose");
const app = express();

// Middleware
app.use(express.json());



app.get('/',(req,res)=>{
console.log("Hello");
res.send("Hello")
})


app.listen(port,(error)=>{
    if(!error){
        console.log("Server is running at Port: " + port);
    }else{
        console.log(error);
    }
})