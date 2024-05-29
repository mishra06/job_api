const express = require('express');
const PORT = 10000
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const mishrarouter = require("./router/job");

const server = express();
dotenv.config();

server.use(express.json());

mongoose
.connect(process.env.Db_url)  // connection to server
.then(()=>console.log("connected db ok"))
.catch((err)=> console.log("Error connect with Db",err));



server.use(mishrarouter);

server.listen(PORT, (req, res)=>{
    console.log("server is running on port "+ PORT);
})