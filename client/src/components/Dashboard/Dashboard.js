import React from 'react'
import './Dashboard.scss'
import { Link } from 'react-router-dom'
import BarChart from '../Charts/BarChart'
import { useState } from 'react'
import { SalesData } from '../../Data/data'

const Dashboard = () => {
    const [userData, setUserData] = useState({
        labels:SalesData.map((data)=>data.year),
        datasets:[{
          label:"SALES",
          data:SalesData.map((data)=>data.aqi)
        }]
      })
  
    return (
    <div className='maindiv'>
        <div className='left'>
            <h2>Admin Panel</h2>
            <span className='menu' style={{backgroundColor:'blue'}}><Link to='/dashboard' style={{textDecoration:'none', color:'black'}}>Sales</Link></span>
            <span className='menu'><Link to='/createproduct' style={{textDecoration:'none', color:'black'}}>Create Product</Link></span>
            <span className='menu'><Link to='/user' style={{textDecoration:'none', color:'black'}}>User</Link></span>
        </div>
        <div className='right'>
            <div className='sales'>
                <h3>Sales Report</h3>
                <div className='bar'><BarChart chartData={userData}/></div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard