const express=require('express');
const mongoose=require('mongoose');
const app=express();

const mongoUri='mongodb+srv://admin:admin@cluster0.e2hwc.mongodb.net/<dbname>?retryWrites=true&w=majority';

mongoose.connect(mongoUri,{
    useNewUrlParser:true,
    useCreateIndex:true
})
mongoose.connection.on('connected',()=>{
    console.log('Connected--')
});

mongoose.connection.error('error',(err)=>{
    console.error('Error in conmnecting mongo',err);
});
app.get('/',(req,res)=>{
    res.send('Hello World 3')

});

app.listen(3000,()=>{
    console.log('Port Listing');
})