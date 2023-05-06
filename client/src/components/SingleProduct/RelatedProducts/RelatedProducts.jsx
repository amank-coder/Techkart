import Products from "../../Products/Products";
import useFetch from "../../../hooks/useFetch";

const RelatedProducts = ({cat}) => {
    
    return(
        <div className="related-proucts">
            <Products search={`?cat=${cat}`} title='Related Products'/>
        </div>
    ) 
    
};

export default RelatedProducts;
