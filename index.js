const express = require('express');
const PORT = 4000
const mongoose = require("mongoose");

const mishrarouter = require("./router/job");

const server = express();

server.use(express.json());

mongoose
.connect("mongodb://localhost:27017/jobapp")
.then(()=>console.log("connected db ok"))
.catch((err)=> console.log("Error connect with Db",err));



server.use(mishrarouter);

server.listen(PORT, (req, res)=>{
    console.log("server is running on port "+ PORT);
})