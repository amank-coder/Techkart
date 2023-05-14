import { MdClose } from "react-icons/md";
import "./Search.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "react-query";
import newRequest from "../../../util/newRequest";


const Search = ({setShowSearch}) => {
    const [query, setQuery]= useState("")
    const navigate= useNavigate()

    const onChange = (e)=>{
        setQuery(e?.target?.value)
    }

    const { isLoading, error, data } = useQuery({
        queryKey:['repoData'],
        queryFn: () =>
        newRequest.get(`/products`).then((res)=>{
          return res.data
        }),
      })
      console.log(data)

      const filteredData = data?.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );


      return (
        <div className="search-modal">
            <div className="form-field">
                <input type="text"
                        autoFocus
                        placeholder="Search for products"
                        value={query}
                        onChange={onChange}
                />
                <MdClose onClick={()=>setShowSearch(false)}/>
            </div>
            <div className="search-result-content">
                <div className="search-results">
                {filteredData?.length === 0 && <div>No results found.</div>}
                    {filteredData && filteredData?.map((item)=>(
                        <div key={item._id} className="search-result-item" onClick={()=>{
                            navigate('/product/'+item._id)
                            setShowSearch(false)
                            }
                            }>
                        <div className="img-container">
                            <img src={item?.image} alt="" />
                        </div>
                        <div className="prod-details">
                            <span className="name">{item?.title} </span>
                            <span className="desc">{item?.desc} </span>
                        </div>
                    </div>))}          
                </div>
            </div>
        </div>
    )
};

export default Search;
