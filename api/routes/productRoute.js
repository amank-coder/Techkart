const express = require("express")
const router = express.Router()
const productController = require("../controller/productController")

router.post('/', productController.createProduct)
router.get('/single/:id', productController.getProduct)
router.get('/', productController.getProducts)

module.exports= router