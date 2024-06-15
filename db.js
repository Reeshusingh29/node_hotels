
const mongoose = require('mongoose');

//define url

const mongourl = 'mongodb://0.0.0.0:27017/hotel';  //hotel naam ka db create hua 

//setup mongodb connection
mongoose.connect(mongourl,{
   // useNewUrlParser: true,
    //useUnifiedTopology:true
})

//access the default connection

const db=mongoose.connection;

//define event listener
db.on('connected',()=>{
    console.log('connected to mongodb server');
});
db.on('error',(err)=>{
    console.error('mongodb connection error',err);
});
db.on('disconnected',()=>{
    console.log('mongodb disconnected');
});

module.exports=db;