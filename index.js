const express =  require('express');
const app = express();
const mongoose = require('mongoose');
const {connectDB}  = require('./db')
const CandidateModel = require('./model');
const path  = require('path');
require('dotenv').config({path :  path.join(__dirname, './.env')})
var cors = require('cors')
app.use(cors())


  
app.get('/',async (req, res) => {
   try{
    const candidates = await CandidateModel.find();
    candidates.sort((a,b)=> b.totalVote - a.totalVote)
    return res.status(200).json(candidates)
   }
   catch(err){
    console.log(err)
    return res.send(400).json({err : err.message});
   }
})


app.get('/vote/:id', async (req, res)=>{
    try{
        const id = req.params.id;
        const candidate = await CandidateModel.findOne({id : id});
        candidate.totalVote = candidate.totalVote + 1;
        await candidate.save();
        return res.status(200).send({message : "vote sucessfully updated"})
        
    }catch(err){
        console.log(err)
        return res.send(400).json({err : err.message});
    }
})


const PORT = process.env.PORT || 5000;
async function startServer(){
    app.listen(PORT,()=>{
        console.log('running server on port' + PORT);
    })
    
    await connectDB();
}

startServer()