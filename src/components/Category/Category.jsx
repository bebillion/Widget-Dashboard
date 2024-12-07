//import React from 'react'
import { useEffect, useState } from "react"
import PropTypes from 'prop-types';
import Widget from "../Widget/Widget"
import './Category.css'
import AddWidgetModal from '../AddWidgetModal/AddWidgetModal'

const Category = ({curElem}) => {
  const {name, widgets} = curElem
const [widgetData, setWidgetData] = useState(widgets || [])
const [isModalOpen, setModalOpen] = useState(false)

const handleAddWidgetClick = () =>{
  setModalOpen(true)
}

const handleAddWidget = (newWidget) =>{
     setWidgetData((prevData)=>[...prevData, newWidget])
     setModalOpen(false)
     }

useEffect(()=>{
    setWidgetData(widgets)
},[widgetData, widgets])

  return (
    <div className="category">
      <h2>{name}</h2>
      <div className="widgets">
        {widgetData && widgetData.map((currElem)=>{
          return(
            <Widget key={curElem.id} curElem={currElem} />
          )
        })}
        <div className="add-widget-card"  onClick={handleAddWidgetClick}>
          +Add Widget
        </div>
        {
          isModalOpen && (
            <AddWidgetModal 
            isOpen={isModalOpen}
            onClose={()=>setModalOpen(false)}
            onAddWidget={handleAddWidget}
            />
          )
        }
      </div>
    </div>
  )
}

Category.propTypes = {
  curElem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    widgets: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
    })).isRequired,
  }).isRequired,
};

export default Category
