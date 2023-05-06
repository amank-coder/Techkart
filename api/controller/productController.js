const Product = require('../models/productModel')
const createError = require('../utils/createError')

exports.createProduct = async(req,res, next)=>{
    const newProduct = new Product(req.body)
    try{
        const savedProduct = await newProduct.save()
        res.status(201).json(savedProduct)
    }catch(err){
        next(err)
    }
}

exports.getProduct = async(req,res,next)=>{
    try{
        const product = await Product.findById(req.params.id)
        if(!product) return next(createError(404, "product not found!"))
        res.status(200).send(product)
    }catch(err){
        next(err)
    }
}

exports.getProducts = async(req,res, next)=>{
    const q= req.query
    const filters={
        ...(q.cat && {cat:q.cat}),
        ...(q.search && {cat:({$regex:q.search, $options:"i"})}) 
    }

    try{
    const products= await Product.find(filters)
    res.status(200).send(products)
    }catch(err){
        next(err)
    }
}