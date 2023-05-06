import "./Products.scss";
import Product from "./Product/Product"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import newRequest from "../../util/newRequest";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Products = ({search, title}) => {
    const navigate = useNavigate()
    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);

    const { isLoading, error, data } = useQuery({
        queryKey:['repoData'],
        queryFn: () =>
        newRequest.get(`/products${search}`).then((res)=>{
          return res.data
        }),
      })
      console.log(data)
      console.log(search)
    return (
       <>
       <h1 className="heading">{title ? 'Related Products' : 'Popular Products'}</h1>
        <div className="products-container">
            {isLoading ? "loading..." : error ? "Something went wrong!":data.map((prod) => (
            <div className="products" key={prod._id}>
                <Link to={`/product/${prod._id}`}><img src={prod.image} className="prod" /></Link>
                <div className="text">{isLoading ? "loading" : error ? "Something went wrong!":prod.title}</div>
                <div className="text2">{isLoading ? "loading" : error ? "Something went wrong!":'Rs. '+prod.price}</div>          
            </div>
          ))}
            
        </div>
        </>
    )
};

export default Products;
