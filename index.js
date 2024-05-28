const express = require('express');
const PORT = 4000
const mongoose = require("mongoose");

const mishrarouter = require("./router/job");

const server = express();

server.use(express.json());

mongoose
.connect("mongodb+srv://vibhakar:Mishra@2000@jobapp.bcyuxx3.mongodb.net/")  // connection to server
.then(()=>console.log("connected db ok"))
.catch((err)=> console.log("Error connect with Db",err));



server.use(mishrarouter);

server.listen(PORT, (req, res)=>{
    console.log("server is running on port "+ PORT);
})