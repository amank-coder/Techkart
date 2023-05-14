import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { useEffect, useContext } from "react";
import { fetchDataFromApi } from "../../util/api";
import { Context } from "../../util/context";

const Home = () => {
    const { categories, setCategories, products, setProducts } = useContext(Context)
    
    // useEffect(()=>{
    //     getProducts()
    //     getCategories()
    // },[])

    // const getProducts = ()=>{
    //     fetchDataFromApi("/api/products?populate=*").then((res) =>{
    //         console.log(res)
    //         setProducts(res)
    //     }) 
    // }
    
    // const getCategories = ()=>{
    //     fetchDataFromApi("/api/categories?populate=*").then((res) =>{
    //         console.log(res)
    //         setCategories(res)
    //     }) 
    // }

    
    return (
        <div className="main">
            <Banner />
            <div className="main-content">
                <div className="layout">
                    <Category categories={categories}/>
                    <Products search={''}/>
                </div>
            </div>
        </div>
    )
};

export default Home;
