const Order = require('../models/orderModel')
const createError = require('../utils/createError')
const Stripe = require("stripe")
const Product = require('../models/productModel')


exports.intent = async (req, res, next) => {
    const stripe = new Stripe('sk_test_51MYkCeSAtWGZLOcAUfDVSO8ctCS6BqGpMCljoN2aohwA85urhmehAgHFPbBXKTIL3JXl5Uq7gxSeyOJGo3go3iFw00E1biij3J');
  
    // const product = await Product.findById(req.params.id);
  
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1000,
      currency: "inr",
      automatic_payment_methods: {
        enabled: true,
      },
    });
  
    // const newOrder = new Order({
    //   image: product?.image,
    //   title: product?.title,
    //   price: product?.price,
    //   payment_intent: paymentIntent.id,
    // });
  
    // await newOrder.save();
  
    res.status(200).send({
      clientSecret: paymentIntent.client_secret,
    });
  };

// exports.createOrder = async(req, res, next) =>{
//     try
//     {
//         const product = await Product.findById(req.params.id)
//         const newOrder = new Order({
//         image: gig.cover,
//         title: gig.title,
//         price: gig.price,
//         payment_intent: paymentIntent.id,
//       });
    
//       await newOrder.save();
    
    //   res.status(200).send({
    //     clientSecret: paymentIntent.client_secret,
    //   });
//     }catch(err){
//         next(err)
//     }
// };