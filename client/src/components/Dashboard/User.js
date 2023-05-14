import React from 'react'
import './User.scss'
import { Link } from 'react-router-dom'
import BarChart from '../Charts/BarChart'
import { useState } from 'react'
import { SalesData } from '../../Data/data'
import {useQuery} from 'react-query'
import newRequest from '../../util/newRequest'


const User = () => {
    const { isLoading, error, data } = useQuery({
        queryKey:['repoData'],
        queryFn: () =>
        newRequest.get(`/users`).then((res)=>{
          return res.data
        }),
      })

      console.log(data)
  
    return (
    <div className='maindiv'>
        <div className='left'>
            <h2>Admin Panel</h2>
            <span className='menu'><Link to='/dashboard' style={{textDecoration:'none', color:'black'}}>Sales</Link></span>
            <span className='menu'><Link to='/createproduct' style={{textDecoration:'none', color:'black'}}>Create Product</Link></span>
            <span className='menu' style={{backgroundColor:'blue'}}><Link to='/user' style={{textDecoration:'none', color:'black'}}>User</Link></span>
        </div>
        <div className='right'>
            <div className='user'>
                <div className='name'>
                    <h3>Name</h3>
                    {isLoading ? "loading..." : error ? "Something went wrong!":data.map((user) => (
                        
                            <span>{isLoading ? "loading" : error ? "Something went wrong!":user?.username}</span>          
                    ))}

                </div>
                <div className='name'>
                    <h3>E-mail</h3>
                    {isLoading ? "loading..." : error ? "Something went wrong!":data.map((user) => (
                        
                        <span>{isLoading ? "loading" : error ? "Something went wrong!":user?.email}</span>          
                ))}
                </div>
                <div className='name'>
                    <h3>Mobile no.</h3>
                    {isLoading ? "loading..." : error ? "Something went wrong!":data.map((user) => (
                        
                        <span>{isLoading ? "loading" : error ? "Something went wrong!":user?.phone}</span>          
                ))}
                </div>
                
                </div>
            </div>
        </div>
  )
}

export default User