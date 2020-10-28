/**
 * Created by manzoor.hussain on 10/27/2020.
 */
const express=require('express');
const mongoose=require('mongoose'); //use for connecting mongo db
const User=mongoose.model('User');

const router=express.Router();

router.post('/signup',async (req,res)=>{
   const{email,password}=req.body;
    try {
        const user = new User({email, password});
        await user.save();
    }catch(err){
        return res.status(422).send(err.message)
    }

res.send(req.body);

});
 module.exports=router;