// const {Schema, mongoose} = require('mongoose')


// const userSchema = new Schema({
//   username: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
// },{
//   timestamps:true
// });

// module.exports= mongoose.model("User", userSchema)

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
  }
},
{
  timestamps:true
})

module.exports= mongoose.model("User",userSchema)