/**
 * Created by manzoor.hussain on 10/27/2020.
 */
const express=require('express');
const mongoose=require('mongoose'); //use for connecting mongo db
const jwt=require('jsonwebtoken');
const User=mongoose.model('User');



const router=express.Router();

router.post('/signup',async (req,res)=>{
   const{email,password}=req.body;
    try {
        const user = new User({email, password});
        await user.save();
        const token=jwt.sign({userId:user._id},'MY_SECRET_KEY');
        res.send({token});
    }catch(err){
        return res.status(422).send(err.message)
    }

res.send(req.body);

});
router.post('/signin',async(req,res)=>{
    const {email,password}=req.body;

    if(!email || !password){
        return res.status(422).send({error:'You must provide email and password'});
    }

    const user=await User.findOne({email});

    if(!user){
        return res.status(404).send({error:'Email not found'});
    }
    try {
        await user.comparePassword(password);
        const token=jwt.sign({userId:user._id},'MY_SECRET_KEY');
        res.send({token});
    }catch(err){
        return res.status(422).send({error:'Invalid password or email'})
    }
});
 module.exports=router;