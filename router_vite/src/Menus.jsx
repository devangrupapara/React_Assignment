import React from 'react'
import { Link } from 'react-router-dom'

const Menus = () => {
  return (
    <div>
      <ul>
        
        <li>
          <Link to="/home">Home</Link>||
          <Link to='/about'>About</Link>||
          <Link to='/Conctect'>Conctet</Link>
        </li>
      </ul>
    </div>
  )
}

export default Menus
