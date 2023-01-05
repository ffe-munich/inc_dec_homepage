import React from 'react'
import './Box.css'

const Card = ({text_1,text_2,text_3}) => {
  return (
    <div className="card card_7">
        
        <span>{text_1}</span>
        <ul>
                    <li><a className='link underline' href="https://inc-dec-board.onrender.com/generators-dashboard" target="_blank">{text_2}</a></li>
                    <li><a className='link_2 underline' target="_blank" href="https://inc-dec-board.onrender.com/load-dashboard">{text_3}</a></li>   
          </ul>
        
    </div>

  )
}

export default Card