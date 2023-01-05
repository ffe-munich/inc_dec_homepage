import React from 'react'
import './Box.css'

const Card = ({img1,img2,img3,text_1_1,text_1_2,text_2_1,text_2_2,text_3_1,text_3_2}) => {
  return (
    <div className="card card_5">

        <span> Mitigation</span>
        <span> Strategies</span>
        <span>{text_1_1}</span>
        <span>{text_1_2}</span>
       
      
        <span>{text_2_1}</span>
        <span>{text_2_2}</span>
      
        <span>{text_3_1}</span>
        <span>{text_3_2}</span>
        <span><img src={img1} alt="" style={{height:'30px'}} /></span>
        <span><img src={img2} alt="" style={{height:'37px'}} /></span>
        <span><img src={img3} alt="" style={{height:'30px'}} /></span>
      
        
    </div>

  )
}

export default Card