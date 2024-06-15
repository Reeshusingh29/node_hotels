const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    taste:{
        type:String,
        enum:['sweet','spicy','sour'],
        required:true
    },
    is_drink:{
        type:Boolean,
        default:false    //iska matlab ko agar client ne kuch bheja toh theek aur agar nahi bheja toh automatically false 
    },
    ingedrients:{
        type:[String],   //iska matlab array of string
        default:[]
    },
    num_sales:{
        type:Number,
        default:0
    }
});

const menuitem = mongoose.model('menu',menuItemSchema);

module.exports = menuitem;