import React from 'react'
import {Link, useLocation} from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='navbar' >
        <div className='links'>
            <Link to='/'>Home</Link>
            <Link to='projects'>Projects</Link>
        </div>

    </div>
  )
}

export default Navbar