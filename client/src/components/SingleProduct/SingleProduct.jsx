// import RelatedProduct from "./RelatedProducts/RelatedProducts"
import { useContext } from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus,
    FaFacebook
} from "react-icons/fa"
import newRequest from "../../util/newRequest";


// import useFetch from "../../hooks/useFetch";
// import { useParams } from "react-router-dom";
import { Context } from "../../util/context";

import "./SingleProduct.scss";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useQuery } from "react-query";

// const SingleProduct = () => {
//     const [quantity,setQuantity]= useState(1)

//     const {id}= useParams()
//     const {data}= useFetch(`/api/products?populate=*&[filters][id]=${id}`)

//     const increment = ()=>{
//         setQuantity((prevState)=>prevState+1)
//     }
//     const decrement = ()=>{
//         setQuantity((prevState)=>{
//             if(quantity===1) return 1
//             return prevState - 1
//         })
//     }

//     if(!data) return;
//     const product = data.data[0].attributes

//     return(
//         <div className="single-product-main-content">
//             <div className="layout">
//                 <div className="single-product-page">
//                     <div className="left"><img src="http://cdn.shopify.com/s/files/1/0057/8938/4802/products/3_4_1a97f712-5557-4a44-8231-d5817d038597.png?v=1655536115" alt="" /></div>
//                     <div className="right">
//                         <span className="name">{product.title}</span>
//                         <span className="price">&#8377;{product.price}</span>
//                         <span className="desc">{product.desc}</span>

//                         <div className="cart-buttons">
//                             <div className="quantity-buttons">
//                                 <span onClick={decrement}>-</span>
//                                 <span>{quantity}</span>
//                                 <span onClick={increment}>+</span>
//                             </div>
//                             <button className="add-to-cart-button" onClick={()=>{
//                                 handleAddToCart(data.data[0],quantity)
//                                 setQuantity(1)
//                             }}>
//                                 <FaCartPlus size={20} />
//                                 ADD TO CART
//                             </button>
//                         </div>
//                         <div className="divider"></div>
//                         <div className="info-item">
//                             <div className="text-bold">
//                                 Category:{" "}
//                                 <span>{product.categories.data[0].attributes.title}</span>
//                             </div>
//                             <div className="text-bold">
//                                 Share:
//                                 <span className="social-icons">
//                                     <FaFacebook size={16}/>
//                                     <FaTwitter size={16}/>
//                                     <FaInstagram size={16} />
//                                     <FaLinkedinIn size={16} />
//                                     <FaPinterest size={16} />
//                                 </span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <RelatedProduct productId={id} categoryId={product.categories.data[0].id}/>
//             </div>
//         </div>
//     ) 
// };

// export default SingleProduct;


const SingleProduct = () => {
    
    const [qty, setQty] = useState(1)
    const {id} = useParams()
    const {handleAddToCart} = useContext(Context)

    const increment = ()=>{
        setQty((prev)=>prev+1)
    }
    const decrement = ()=>{
        setQty((prev)=>{
            if(prev<=1) return 1
            return prev-1
        })
    }

    const { isLoading, error, data } = useQuery({
        queryKey:['product'],
        queryFn: () =>
        newRequest.get(`/products/single/${id}`).then((res)=>{
          return res.data
        }),
      })
      console.log(id)
      console.log(data)
    
    return(
        <div className="single-product-main-content">
            <div className="layout">
                <div className="single-product-page">
                   <div className="left"><img src={data?.image} alt="" /></div>
                   <div className="right">
                         <span className="name">{data?.title}</span>
                         <span className="price">&#8377;{data?.price}</span>
                         <span className="desc">{data?.desc}</span>
                         <div className="cart-buttons">
                             <div className="quantity-buttons">
                                 <span onClick={decrement}>-</span>
                                 <span>{qty}</span>
                                 <span onClick={increment}>+</span>
                             </div>
                             <button className="add-to-cart-button"  onClick={()=>{
                                 handleAddToCart(data,qty)
                                 setQty(1)
                             }}>
                                 <FaCartPlus size={20} />
                                 ADD TO CART
                             </button>
                       </div>
                       <div className="divider"></div>
                         <div className="info-item">
                             <div className="text-bold">
                                 Category:{data?.cat} <br/>
                                 <span>{data?.title}</span>
                             </div>
                             <div className="text-bold">
                                 Share:
                                 <span className="social-icons">
                                     <FaFacebook size={16}/>
                                     <FaTwitter size={16}/>
                                     <FaInstagram size={16} />
                                     <FaLinkedinIn size={16} />
                                     <FaPinterest size={16} />
                                 </span>
                             </div>
                         </div>
                </div>
            </div>
            <RelatedProducts cat={data?.cat}/>
        </div>
        </div>
    )
}

export default SingleProduct;