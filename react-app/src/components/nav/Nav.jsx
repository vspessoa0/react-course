import React from 'react'
import './nav.css'
import reactLogo from '../../images/logo192.png'


const Nav = () => {
  return (
    <nav>
        <div className="logo">
            <img src={reactLogo} alt='React Logo' className='logoIcon'/>
            <h3>ReactFacts</h3>
        </div>
        <h4>React Course - Project 1</h4>
    </nav>
  )
}

export default Nav