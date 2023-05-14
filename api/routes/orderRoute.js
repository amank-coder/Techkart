const express = require("express")
const orderController = require('../controller/orderController')
const router = express.Router()

router.post("/create-payment-intent", orderController.intent)

module.exports=router