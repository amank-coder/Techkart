import React from 'react'
import './Dashboard.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './CreateProduct.scss'
import newRequest from '../../util/newRequest'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateProduct = () => {
    const [product, setProduct] = useState({
        title:"",
        desc:"",
        cat:"",
        price:"",
        image:""
      })

      const handleChange = (e)=>{
        setProduct((prev)=>{
          return {...prev, [e.target.name]:e.target.value}
        })
      }

      const handleSubmit = async(e)=>{
        e.preventDefault()
        try{
          await newRequest.post("/products", product)
          notify()
          e.target.value=null
          window.location.reload()
        }catch(err){
          console.log(err)
        }
      }
    
      const notify = () => toast("New Product added");
    
    return (
    <div className='maindiv'>
        <div className='left'>
            <h2>Admin Panel</h2>
            <span className='menu'><Link to='/dashboard' style={{textDecoration:'none', color:'black'}}>Sales</Link></span>
            <span className='menu' style={{backgroundColor:'blue'}}><Link to='create-product' style={{textDecoration:'none', color:'black'}}>Create Product</Link></span>
            <span className='menu'><Link to='/user' style={{textDecoration:'none', color:'black'}}>User</Link></span>
        </div>
        <div className='right'>
            <div className='sales'>
            <div className="register">
      <form onSubmit={handleSubmit}>
        <div className="left">
          <h1>Add Product</h1>
          <label htmlFor="">Title</label>
          <input
            name="title"
            type="text"
            onChange={handleChange}
          />
          <label htmlFor="">Description</label>
          <input
            name="desc"
            type="text"
            onChange={handleChange}
          />
          <label htmlFor="">Category</label>
          <input
            name="cat"
            type="text"
            onChange={handleChange}
          />
          <label htmlFor="">Price</label>
          <input name="price" type="number" placeholder='Rs.' onChange={handleChange}/>
          <label htmlFor="">Product-image link</label>
          <input
            name="image"
            type="text"
            onChange={handleChange}
          />
          <button type="submit">ADD</button>
          <ToastContainer hideProgressBar={true} autoClose={1500} position="top-center" />
        </div>
      </form>
    </div>
            </div>
        </div>
    </div>
  )
}

export default CreateProduct;