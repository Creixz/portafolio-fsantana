import React from 'react'
import './ContactInfoCard.css'

const ContactInfoCard = ({ iconUrl, text, direccion }) => {

  const handleContactClick = () => {
    // Puedes realizar acciones adicionales aquí si es necesario
    // ...

    // Abre el enlace de GitHub en una nueva pestaña
    window.open(direccion, '_blank');
  };

  return (
    <div className="contact__details-card">
        <div className="icon" onClick={handleContactClick}>
            <img className='img__icon' src={iconUrl} alt={text} />
        </div>
        <p>{text}</p>
    </div>
  )
}

export default ContactInfoCard