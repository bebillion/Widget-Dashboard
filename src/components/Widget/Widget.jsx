//import React from 'react'
import PropTypes from 'prop-types';
import './Widget.css'



const Widget = ({curElem}) => {
  const {name,content} = curElem;
  return (
    <div className="widget">
        <h3>Widget Name:{name}</h3>
        <p>{content}</p>
    </div>
  )
}

Widget.propTypes = {
  curElem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};


export default Widget
