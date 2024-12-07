//import React from 'react'
import TextField from '@mui/material/TextField'
import './WidgetSearch.css'

const WidgetSearch = () => {
  return (
    <div className="widget-search">
      <TextField
      label='Search-widgets'
      />
      <button>Search</button>
    </div>
  )
}

export default WidgetSearch
