const express = require("express");
const router = express.Router();
const employees = require("../models/empSchema");

// router.get("/",(req,res)=>{
//     console.log("connect");
// });

router.post("/register",async(req,res)=>{
    //  console.log(req.body);
    const {name,email,age,mobile,work,add,desc} =req.body;
    if(!name || !email || !age || !mobile|| !work || !add || !desc){
          res.status(404).send("plz fill the data");

    }
   try {

    const preuser = await employees.findOne({email:email});
    console.log(preuser);
    if(preuser){
        res.status(404).send("this is user is already present");
    }
    else{
        const addemp = new employees({
            name,email,age,mobile,work,add,desc
        });
        await addemp.save();
        res.status(201).json(addemp);
        console.log(addemp);
    }

   }catch(error){
    res.status(404).json(error)
   }

})


//get employee

router.get("/getdata",async(req,res)=>{
    try{
        const empdata = await employees.find();
        console.log(empdata);
        res.status(201).json(empdata)
;
    }catch(error){
        res.status(404).json(error)

    }
})


// get individual employee
router.get("/getemployee/:id",async(req,res)=>{
    try{
       console.log(req.params);
       const {id} = req.params;
       const empindividual=await employees.findById({_id:id});
       console.log(empindividual);
       res.status(201).send(empindividual);
    }catch(error){
        res.status(404).send(error);

    }
})


//update employeedata
router.patch("/updateemp/:id",async(req,res)=>{
    try{
    //    console.log(req.params);
       const {id} = req.params;
       const updatedemp=await employees.findByIdAndUpdate(id,req.body,{
        new:true
       });
       console.log(updatedemp);
       res.status(201).send(updatedemp);
    }catch(error){
        res.status(404).send(error);

    }
})


//delete employee
router.delete("/deleteemp/:id",async(req,res)=>{
    try{
   
       const {id} = req.params;
       const deleteemp=await employees.findByIdAndDelete({_id:id})
       
       console.log(deleteemp);
       res.status(201).send(deleteemp);
    }catch(error){
        res.status(404).send(error);

    }
})


module.exports = router;
