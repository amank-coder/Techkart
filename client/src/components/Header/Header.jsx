import { useState, useEffect, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";

import {TbSearch} from "react-icons/tb"
import {CgShoppingCart} from "react-icons/cg"
import {AiOutlineHeart} from "react-icons/ai"
import {FiMenu} from 'react-icons/fi'

import  Search  from "./Search/Search";
import Cart from "../Cart/Cart"
import { Context } from "../../util/context";
import { Link } from "react-router-dom";
import newRequest from "../../util/newRequest";

import "./Header.scss";
import { useCart } from "../../util/cartContext";

const Header = () => {
    
    const [scrolled, setScrolled] = useState(false)
    const [showCart, setShowCart] = useState(false)
    const [showSearch, setShowSearch] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const [hactive, setHactive] = useState(false);
    const navigate = useNavigate()
    const [cart] = useCart()
    const {cartCount, handleClick, scrollToRef} = useContext(Context)
    const handleScroll = ()=> {
        const offset= window.scrollY
        if(offset>350){
            setScrolled(true)
        }
        else{
            setScrolled(false)
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',handleScroll)
    })
    useEffect(()=>{
        setIsOpen(false)
    },[])
      
        const handleToggle = () => {
          setIsOpen(!isOpen)
        }
        

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
               <div className="left">
               <div className="menu">
               <FiMenu className={`hamburger-icon ${hactive ? 'active' : ''}`} onClick={()=>setHactive(!hactive)} size={24}/>
               <div className={`lscreen-links ${hactive ? 'active' : ''}`}>
               <span onClick={()=>{navigate("/") 
               setHactive(false)}}>Home</span>
                    <span onClick={()=>{navigate("/about")
                     setHactive(false)}}>About</span>
                    <span onClick={handleClick}>Categories</span>
               </div>
                    </div>
                   
                </div>
                
                <div className="center" onClick={()=>navigate("/")}>TECHKart</div>
                <div className="right">
                    <TbSearch onClick={()=>setShowSearch(true)}/>
                    <AiOutlineHeart className="heart"/>
                    <span className="cart-icon">
                        <CgShoppingCart onClick={()=> setShowCart(true)}/>
                        <span className="qty">{cart?.length}</span>
                    </span>
                    {!currentUser && <span><Link to='/login' className="login">Login</Link></span>}
                    {!currentUser ? <span><Link to="/register" className="login">Register</Link></span>:
                    
                    <span className="dropdown" onMouseEnter={()=>setIsOpen(true)} onMouseLeave={()=>setIsOpen(false)}>
                    <h2 className={`${currentUser?.isAdmin ? 'user' : 'ad'}`}>{currentUser.username}</h2>
                    <p className="admin">{currentUser?.isAdmin && '(admin)'}</p>
                        {isOpen && (
                            <div>
                                <div className="dropdown-menu">
                                    <ul>
                                        {currentUser?.isAdmin ? <li onClick={()=>navigate('/dashboard')}>Dashboard</li>:<li onClick={()=>navigate('/orders')}>Orders</li>}
                                        <li>{currentUser && <span onClick={handleLogout}>Logout</span>}</li>
                                        
                                    </ul>
                                </div>
                            </div>
                            
                        )}
                    </span>
                    }
                </div>
            </div>
        </header>
        {showCart && <Cart setShowCart={setShowCart}/> }
        {showSearch && <Search setShowSearch={setShowSearch}/>}
        
        </>
    )
}

export default Header;




