import React from 'react'
import './ContactInfoCard.css'

const ContactInfoCard = ({ iconUrl, text }) => {
  return (
    <div className="contact__details-card">
        <div className="icon">
            <img className='img__icon' src={iconUrl} alt={text} />
        </div>
        <p>{text}</p>
    </div>
  )
}

export default ContactInfoCard