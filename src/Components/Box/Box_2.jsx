import React from 'react'
import './Box.css'

const Card = ({img1,img2,text1,text2,text3}) => {
  return (
    <div className="card card_2">
        
        <span>{text1}</span>
        <span><img src={img1} alt=""  style={{width: '700px',height:'100px'}}/></span>
        <div className='space-left' style={{left:'10%'}}>
        <span>{text2}</span>
        </div>
        <div className='space-left' style={{left:'10%'}}> 
        <span>{text3}</span>
        </div>
        <div className='shift-left'>
        <span><img src={img2} alt="" style={{width: '90px',height:'100px'}}/></span> 
        </div>  
    </div>

  )
}

export default Card