import Products from "../../Products/Products";

const RelatedProducts = ({cat}) => {
    
    return(
        <div className="related-proucts">
            <Products search={`?cat=${cat}`} title='Related Products'/>
        </div>
    ) 
    
};

export default RelatedProducts;
