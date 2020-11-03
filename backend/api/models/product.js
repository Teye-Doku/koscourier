const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  user:{type:mongoose.Schema.Types.ObjectId,required:true,ref:'User'},
  name:{type:String,required:true},
  image:{type:String,required:true},
  category:{type:String,required:true},
  description:{type:String,required:true},
  initalPrice:{type:Number,required:true,default:0},
  price:{type:Number,required:true,default:0}
});

module.exports = mongoose.model('Product',productSchema);