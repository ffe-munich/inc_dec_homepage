import React from 'react'
import './Box.css'


const Card = ({img1,img2,img3,img4,img5,text1,text2,text3}) => {
  return (
    <div className="card card_1">
        <div className="box-1-right">
        <span>{text1}</span>
        
        <span><img src={img5} alt=""  style={{width: '100px',height:'20px'}}/></span>
      
        
        <span>{text2}</span>
        <span><img src={img5} alt=""  style={{width: '100px',height:'20px'}}/></span>
        <span>{text3}</span>
        </div>

        <div className="box-1-center" style={{ top:'-103%' ,left: '-5%'}}>
          <span><img src={img2} alt="" style={{height:'50px'}} /></span>
          
          <span><img src={img3} alt="" style={{height:'52px'}} /></span>
          <span><img src={img4} alt="" style={{height:'55px'}} /></span>
        </div>

        <div className="box-1-left" style={{ top:'-175%' ,left: '-5%'}}>
          <img src={img1} alt="" style={{height:'250px'}} />
        </div>
        
    </div>

  )
}

export default Card