import { useContext } from "react";
import { MdClose } from "react-icons/md";
import { Context } from "../../../util/context";
import "./CartItem.scss";
import { useCart } from "../../../util/cartContext";

const CartItem = () => {
    // const {cartItems, handleCartProductQuantity, handleRemoveFromCart} = useContext(Context)
    const [cart, setCart] = useCart()
    const {qty} = useContext(Context)
    const removeCartItem = (product)=>{
        let items=[...cart]
        items=items.filter((p)=> p._id !== product._id)
        setCart(items)
        localStorage.setItem("cart", JSON.stringify(items))
    }

    return (
        <div className="cart-products">

            {cart.map((item)=>(
                <div key={item._id} className="cart-product">
                    <div className="img-container">
                        <img src={item.image} alt="" />
                    </div>
                    <div className="prod-details">
                        <span className="name">{item.title} </span>
                        <MdClose className="close-btn" onClick={()=>removeCartItem(item)}/>
                        <div className="quantity-buttons">
                            <span>-</span>
                            <span>{qty}</span>
                            <span>+</span>
                        </div> 
                        <div className="text">
                            <span>{qty} </span>
                            <span>x</span>
                            <span className="highlight">&#8377; {item.price}</span>  
                        </div>       
                    </div>
            </div>
            ))
            }       
        </div>
        )
};

export default CartItem;
