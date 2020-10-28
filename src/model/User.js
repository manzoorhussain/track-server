/**
 * Created by manzoor.hussain on 10/27/2020.
 */
const mongoose=require('mongoose'); //use for connecting mongo db

const userSchema=new mongoose.Schema({

    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    }

});

mongoose.model('User',userSchema)