const User = require('../models/userModel')
const createError = require('../utils/createError')

exports.getUser = async(req,res, next)=>{

    try{
    const user= await User.find()
    res.status(200).send(user)
    }catch(err){
        next(err)
    }
}