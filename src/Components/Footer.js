import React from 'react'
import '../Styles/Footer.css'
import EmailIcon from '@mui/icons-material/Email'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='socialMedia'>

        <EmailIcon onClick={()=> window.location.href = "mailto:cruzhandymanservices70@gmail.com?subject=Service"} />
        <p> &copy; 2023 joehandyman.com </p>

        </div>
    </div>
  )
}

export default Footer