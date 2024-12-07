//import React from 'react'
import WidgetSearch from "../WidgetSearch/WidgetSearch"
import AddWidgetModal from "../AddWidgetModal/AddWidgetModal"
import Category from "../Category/Category"
import dashboardData from '../../api/dashboard_structure.json'
import { useEffect, useState } from "react"
import './Dashboard.css'


const Dashboard = () => {
const [data , setData] = useState(null)

useEffect(()=>{
  setData(dashboardData.categories)
},[data])


  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <WidgetSearch/>
      <div>
        {data && data.map((currElem)=>{
          return(
            <Category key={currElem.id} curElem={currElem}/>
          )
        })}
       
      </div>
      <AddWidgetModal/>
    </div>
  )
}

export default Dashboard
