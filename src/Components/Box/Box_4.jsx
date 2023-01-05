import React from 'react'
import './Box.css'

const Card = ({img1,img2,text_1_1,text_1_2,text_2_1,text_2_2}) => {
  return (
    <div className="card card_4">
        <span>Dashboard</span>
        <span>Functionalities</span>
        <span>{text_1_1}</span>
        <span>{text_1_2}</span>
        
        <span>{text_2_1}</span>
        <span>{text_2_2}</span>
        <span><img src={img1} alt="" style={{height:'35px'}} /></span>
        <span><img src={img2} alt="" style={{height:'35px'}} /></span>
   
        
    </div>

  )
}

export default Card