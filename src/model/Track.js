/**
 * Created by manzoor.hussain on 10/28/2020.
 */
const mongoose=require('mongoose'); //use for connecting mongo db


const pointSchema=new mongoose.Schema({

    timeStamp:Number,
    coords:{
        latitude:Number,
        longitude:Number,
        altitude:Number,
        accuracy:Number,
        heading:Number,
        speed:Number
    }

});

const trackSchema=new mongoose.Schema({

    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    name:{
        type:String,
        default:''
    },
    locations:[pointSchema]



});

mongoose.model('Track',trackSchema);