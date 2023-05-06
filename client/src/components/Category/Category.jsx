import Products from "../Products/Products";
import "./Category.scss";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import newRequest from "../../util/newRequest";

const Category = () => {
    const {search} = useLocation()

    const { isLoading, error, data } = useQuery({
        queryKey:['repoData'],
        queryFn: () =>
        newRequest.get(`/products${search}`).then((res)=>{
          return res.data
        }),
      })
      console.log(data)
    return (
        <div className="category-main-content">
            <div className="layout">
                <div className="category-title">
                    
                </div>
                    <Products innerPage={true} search={search}/>
            </div>
        </div>
    )
};

export default Category;
