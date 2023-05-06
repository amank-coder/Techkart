import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import {TbSearch} from "react-icons/tb"
import {CgShoppingCart} from "react-icons/cg"
import {AiOutlineHeart} from "react-icons/ai"

import  Search  from "./Search/Search";
import Cart from "../Cart/Cart"
import { Context } from "../../util/context";
import { Link } from "react-router-dom";
import newRequest from "../../util/newRequest";

import "./Header.scss";

const Header = () => {
    
    const [scrolled, setScrolled] = useState(false)
    const [showCart, setShowCart] = useState(false)
    const [showSearch, setShowSearch] = useState(false)
    const navigate = useNavigate()

    const {cartCount} = useContext(Context)
    const handleScroll = ()=> {
        const offset= window.scrollY
        if(offset>200){
            setScrolled(true)
        }
        else{
            setScrolled(false)
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',handleScroll)
    })

    const currentUser = JSON.parse(localStorage.getItem("currentUser"))

    const handleLogout = async()=>{
        try{
          await newRequest.post("/auth/logout")
          localStorage.setItem("currentUser", null)
          navigate("/")
        }catch(err){
          console.log(err)
        }
    }

    return (
        <>
        <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
            <div className="header-content">
                <ul className="left">
                    <li onClick={()=>navigate("/")}>Home</li>
                    <li>About</li>
                    <li>Categories</li>
                </ul>
                <div className="center" onClick={()=>navigate("/")}>TECHKart</div>
                <div className="right">
                    <TbSearch onClick={()=>setShowSearch(true)}/>
                    <AiOutlineHeart className="heart"/>
                    <span className="cart-icon">
                        <CgShoppingCart onClick={()=> setShowCart(true)}/>
                        {cartCount!==0 && <span className="qty">{cartCount}</span>}
                    </span>
                    {!currentUser && <span><Link to='/login' className="login">Login</Link></span>}
                    {currentUser && <span className="login" onClick={handleLogout}>Logout</span>}
                    {!currentUser ? <span><Link to="/register" className="login">Register</Link></span>:
                    <h2>{currentUser.username}</h2>}
                </div>
            </div>
        </header>
        {showCart && <Cart setShowCart={setShowCart}/> }
        {showSearch && <Search setShowSearch={setShowSearch}/>}
        
        </>
    )
};

export default Header;
