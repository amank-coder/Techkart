import {useNavigate} from "react-router-dom";
import "./Category.scss";
import { useQuery } from "react-query";
import newRequest from "../../../util/newRequest";
import { useLocation } from "react-router-dom";

export const Category = ({categories}) => {
    const navigate = useNavigate()
    const {search} = useLocation()
    // const { isLoading, error, data } = useQuery({
    //     queryKey:['repoData'],
    //     queryFn: () =>
    //     newRequest.get(`/products${search}`).then((res)=>{
    //       return res.data
    //     }),
    //   })
    //   console.log(data)

    return (
        <div className="shop-by-category">
        <h1>Categories</h1>
            <div className="categories">
                
                        <div className="category" onClick={()=> navigate(`/category?cat=Headphone`)}>
                            <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1_5.png?v=1655534211" alt=""/>
                            <div className="cat">Headphones</div>
                            
                        </div>
                        <div className="category" onClick={()=> navigate(`/category?cat=speaker`)}>
                            <img src="https://media.croma.com/image/upload/v1665448129/Croma%20Assets/Entertainment/Speakers%20and%20Media%20Players/Images/235236_3_nphncc.png" alt="" />
                            <div className="cat">Bluetooth Speaker</div>
                        </div>
                        <div className="category" onClick={()=> navigate(`/category?cat=Smartwatch`)}>
                            <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Green_6c922a0e-c3a0-46bc-a3dc-113a89a82207_600x.png?v=1658294451" alt="" />
                            <div className="cat">Smart Watches</div>
                        </div>
                        <div className="category" onClick={()=> navigate(`/category?cat=Earbuds`)}>
                            <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/616b4ead-bbd9-4a16-aeab-8d331a16f697_600x.png?v=1642405569" alt="" />
                            <div className="cat">Earbuds</div>
                        </div>
   
            </div>
        </div>
    )
};

export default Category;
