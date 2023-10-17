import React from 'react'
import './header.css'
import reactLogo from '../../images/logo192.png'

const Header = () => {
  return (
    <header>
      <nav className='nav'>
        <img src={reactLogo} alt='React Logo' className='logo'/>
        <ul className='nav-items'>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <h1>Fun facts about React</h1>
    </header>
  )
}

export default Header