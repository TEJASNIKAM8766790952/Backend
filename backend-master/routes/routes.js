const express=require('express');
const routes=express.Router();
const stItem=require('../modal/students');



routes.post('/student',async(req,res)=>{
    
  const{name,Roll,collage,Branch}=req.body;

  const newStudent=new stItem({
    name,
    Roll,
    collage,
    Branch
  })
  try{
  const saveItem=await newStudent.save();
  res.status(201).send("Data saved successfully");
  }catch(err){
    console.log(err);
    res.status(401).send("error")
  }
})


routes.get('/home',(req,res)=>{
    res.send("I am a home page ")

})

routes.delete('/delete',(req,res)=>{
   res.send("I am a delete page")
})

routes.put('/put',(req,res)=>{
  res.send("I am a put page")
})

routes.patch('/patch',(req,res)=>{
    res.send("I am a patch page")
})


module.exports=routes;