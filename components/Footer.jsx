import React, {useState} from 'react'
import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai'

const Footer = () => { 
  
  const newYear = new Date().getFullYear()
  const [year, setYear] = useState(newYear)


  return (
    <div className='footer-container'>
        <p>{year} Sound ON All rights reserved</p>
        <p className="icons">
          <AiFillInstagram />
          <AiOutlineTwitter /> 
        </p>
    </div>
  )
}

export default Footer