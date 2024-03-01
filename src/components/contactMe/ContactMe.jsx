import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './contactInfoCard/ContactInfoCard'
import ContactForm from './contactForm/ContactForm'

const ContactMe = () => {
    return (
        <section id='contact' className='contact__container'>
            <h5>Contact Me</h5>
            <div className="contact__content">
                <div style={{ flex: 1 }}>
                    <ContactInfoCard
                        iconUrl="./linkedin_1384088.png"
                        text="https://www.linkedin.com"
                        direccion="https://www.linkedin.com/in/freddy-santana-salas-03931b233/" />
                    <ContactInfoCard
                        iconUrl="./github_1051326.png"
                        text="https://github.com/Creixz"
                        direccion= "https://github.com/Creixz" />
                </div>
                <div style={{ flex: 1 }}>
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}

export default ContactMe