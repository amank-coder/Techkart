const express = require("express")
const mongoose = require('mongoose')
const userRoute = require('./routes/userRoute')
const authRoute = require('./routes/authRoute')
const productRoute = require('./routes/productRoute')
const cookieParser = require("cookie-parser")
const dotenv= require("dotenv")
const cors = require('cors')
const app = express()
dotenv.config();

const connect = async()=>{
    try{
        await mongoose.connect("mongodb://0.0.0.0:27017/techkart")
        console.log("Connected to MongoDB")
    }catch(err){
        console.log(err)
    }
}

app.use(express.json())
app.use(cookieParser())
app.use(cors({ origin: "http://localhost:3000", credentials: true }));


app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/products", productRoute)



app.listen(8800,()=>{
    connect()
    console.log("Backend server is runnning at http://localhost:8800")
})