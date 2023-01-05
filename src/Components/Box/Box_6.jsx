import React from 'react'
import './Box.css'

const Card = ({emoji,heading,detail}) => {
  return (
    <div className="card card_6">
        
        <span>{detail}</span>
        
    </div>

  )
}

export default Card