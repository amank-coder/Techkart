const {Schema, mongoose} = require('mongoose')

const productSchema = new Schema({
  title: {
    type:String,
    required:true,
    unique:true
  },
  desc:{
    type:String,
    required:true,
  },
  cat:{
    type:String,
    required:true,
  },
  price:{
    type:Number,
    required:true
  },
  image:{
    type:String,
    required:false
  }
},
{
  timestamps:true
})

module.exports= mongoose.model("Product",productSchema)