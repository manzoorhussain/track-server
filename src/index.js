require('./model/user');
require('./model/Track');
const express=require('express');
const mongoose=require('mongoose'); //use for connecting mongo db
const authRoutes=require('./routes/authRoutes'); //use for authincation
const bodyParser=require('body-parser'); //use for parser data into json/input data
const trackRoutes=require('./routes/trackRoutes');
const requireAuth=require('./middlewares/requireAuth'); //use for authincation


const app=express();


app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

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
app.get('/',requireAuth,(req,res)=>{
    res.send(`Your email :${req.user.email}`)

});

app.listen(3000,()=>{
    console.log('Port Listing 3000');
})