const {Schema, mongoose} = require('mongoose')

const orderSchema = new Schema({
  title: {
    type:String,
    required:true,
    unique:true
  },
  price:{
    type:Number,
    required:true
  },
  image:{
    type:String,
    required:false
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
  payment_intent: {
    type: String,
    required: true,
  },
},
{
  timestamps:true
})

module.exports= mongoose.model("Order",orderSchema)