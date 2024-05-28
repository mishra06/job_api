
const JobModel = require("../models/job");

const  createjob = async(req,res)=>{
    console.log(req.body,"print");
    const jobobj = req.body;
    const newjob = new JobModel(jobobj);
    await newjob.save();
    res.json({
        success :true,
        message:"Dummy created",
    });
};

// const listJob = async(req,res)=>{
//     // const minSalary = req.query.minSalary;
//     const {minSalary,maxSalary} = req.query;
//     const joblist = await JobModel.find({
//         // salary:{$gte:minSalary}
//         $and : [{salary:{$gte: minSalary } }, { salary: { $lte: maxSalary} }],
//     });
//     console.log(joblist,"job-list");
//     res.json({
//         success :true,
//         message:"list  created",
//         result : joblist,
//     });
// }

const listJob = async(req,res)=>{    // job list 
    const joblist = await JobModel.find();
    console.log(joblist,"job-list");
    res.json({
        success :true,
        message:"list  created",
        result : joblist,
    });
}


const editjob = async(req,res)=>{
    const JobId = req.params.id;  // using param we get the id of the job
    console.log(JobId);
    const UpdatedData = req.body;  //using req.body what ever we want to edit the data we get from the postman
    console.log(UpdatedData);

    await JobModel.findByIdAndUpdate(JobId, UpdatedData);  // by findbyidandupdate we pass two parameter first the id we want to change and second the value we want to edit .

    res.json({
        success :true,
        message:"job edited successfully",
        result: JobId,
    });
}

const deletejob = async(req,res)=>{
    const DeleteJob = req.params.id;
    console.log(DeleteJob);
    await JobModel.findByIdAndDelete(DeleteJob);
    res.json({
        success :true,
        message:"job deleted Successfully",
        result:DeleteJob
    })
}

const jobController = {
    createjob,
    listJob,
    editjob,
    deletejob
}

module.exports = jobController;