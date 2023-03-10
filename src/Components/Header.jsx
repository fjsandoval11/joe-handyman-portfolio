import React from 'react'
import '../Styles/Header.css'
import handymanBanner from '../Assets/handymanBanner.png'
import joeCard from '../Assets/joeBusinessCard.jpg'


const Header = () => {
  return (
    <div className='header'>
        <img src={handymanBanner} />
    </div>
  )
}

export default Header