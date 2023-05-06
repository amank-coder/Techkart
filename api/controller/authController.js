const User = require("../models/userModel")
const bcrypt = require("bcrypt")
var jwt = require('jsonwebtoken');
exports.register = async(req, res, next)=>{
    try{
        // const newUser = new User({
        //     username:"test",
        //     email:"test",
        //     password:"test"
        // })
        const hash= await bcrypt.hash(req.body.password, 5)
        const newUser = new User({
            ...req.body,
            password:hash,
            })
        await newUser.save()
        res.send("New user created!!")
    }catch(err){
        res.status(500).send("Something went wrong!!")
    }
}

exports.login = async(req, res, next)=>{
    try{
        const user = await User.findOne({username:req.body.username})
        if(!user) return res.status(404).send("User not found!")

        const isCorrect = bcrypt.compare(req.body.password, user.password)
        if(!isCorrect) return res.status(400).send("Wrong password or username!!")

        var token = jwt.sign(
            {
              id: user._id,
              isSeller: user.isSeller,
            },
            process.env.JWT_KEY
            )

        const {password, ...info} = user._doc

        res.cookie("accessToken", token, {
            httpOnly:true,
        }).status(200).send(info)

    }catch(err){
        next(err)
    }
}

exports.logout = async(req, res)=>{
        res.clearCookie("accessToken", {
            sameSite:"none",
            secure:true,
        }).status(200).send("User has been logged out!")
}