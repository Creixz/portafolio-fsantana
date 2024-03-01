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
                        iconUrl="./empty-email_80599.png"
                        text="s.freddy131@gmail.com" />
                    <ContactInfoCard
                        iconUrl="./github_1051326.png"
                        text="https://github.com/Creixz" />
                </div>
                <div style={{ flex: 1 }}>
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}

export default ContactMe