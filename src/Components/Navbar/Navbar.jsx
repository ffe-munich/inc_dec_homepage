import React from 'react'
import './Navbar.css'
import UNITE from '../../img/unite.png'

const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
        <a href="https://unit-e2.de/">
                    <img src={UNITE}  alt="" />
                </a>
            
        </div>
        <div className="n-center">
            <div>
               Inc-Dec Gaming Dashboard
            </div>
            
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType:'none'}}>
                    
                    <li><button className='btn'><a className='lnk' href="https://inc-dec-board.onrender.com/generators-dashboard" target="_blank">Generator Dashboard</a></button></li>
                    <li><button className='btn'><a target="_blank" className='lnk' href="https://inc-dec-board.onrender.com/load-dashboard">Load Dashboard</a></button></li>  
                </ul>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar