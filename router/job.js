const express = require("express");

const  jobController = require("../controllers/job")
 const mishrarouter = express.Router();

 mishrarouter.post("/api/jobs",jobController.createjob);

 mishrarouter.get("/api/jobs",jobController.listJob);

 mishrarouter.put("/api/jobs/:id", jobController.editjob);

 mishrarouter.delete("/api/jobs/:id", jobController.deletejob);


//  mishrarouter.delete("/api/jobs/:id", jobController.deletejob);

 module.exports = mishrarouter;
