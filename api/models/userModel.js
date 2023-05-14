const {Schema, mongoose} = require('mongoose')

const userSchema = new Schema({
  username: {
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true,
    unique:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  phone:{
    type:String,
    required:false
  },
  isAdmin:{
    type:Boolean,
    required:true,
    default:false
  }
},
{
  timestamps:true
})

module.exports= mongoose.model("User",userSchema)