import React, { useContext, useState, useRef} from "react";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import { Context } from "../../util/context";
import CartItem from "./CartItem/CartItem";
import { makePaymentRequest } from "../../util/api";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../util/cartContext";
import "./Cart.scss";

const Cart = ({setShowCart}) => {
    const [cart] = useCart()
    const {qty, handleClick} = useContext(Context)
    // const [sum, setSum] = useState()
    const sum=0
    const {scrollToRef} = useContext(Context)
    const totalPrice = ()=>{
        try{
            let total=0
            cart?.map((item)=>{
                total = total + item.price
            })
            return total
        }catch(err){
            console.log(err)
        }
    }

    const navigate = useNavigate()
    return (
        <div className="cart-panel">
            <div
                className="opac-layer"
                onClick={() => setShowCart(false)}
            ></div>
            <div className="cart-content">
                <div className="cart-header">
                    <span className="heading">Shopping Cart</span>
                    <span
                        className="close-btn"
                        onClick={() => setShowCart(false)}
                    >
                        <MdClose className="close-btn" />
                        <span className="text">close</span>
                    </span>
                </div>

                {!cart.length && (
                    <div className="empty-cart">
                        <BsCartX />
                        <span>No products in the cart.</span>
                        <button className="return-cta" onClick={()=>{
                            navigate('/')
                            setShowCart(false)
                            }}>
                            RETURN TO SHOP
                        </button>
                    </div>
                )}

                {!!cart.length && (
                    <>
                        <CartItem />
                        <div className="cart-footer">
                            <div className="subtotal">
                                <span className="text">Subtotal:</span>
                                <span className="text total">
                                    &#8377;{totalPrice()}
                                </span>
                            </div>
                            <div className="button">
                            <Link to='/pay'>

                                <button
                                    className="checkout-cta"
                                    onClick={()=>setShowCart(false)}
                                >
                                    Checkout
                                </button>
                                </Link>

                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;
