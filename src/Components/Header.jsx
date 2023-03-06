import React from 'react'
import '../Styles/Header.css'
import handymanBanner from '../Assets/handymanBanner.png'


const Header = () => {
  return (
    <div className='header'>
        <img src={handymanBanner} />
    </div>
  )
}

export default Header