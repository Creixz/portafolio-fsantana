import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fsantana', 'template_uqzv398', form.current, 'GYile41Jgat0Q4Mrb')
      .then((result) => {
        console.log('Message sent:', result.text);
        alert("Mensaje enviado con éxito!");
      }, (error) => {
        console.error('Error:', error.text);
        alert("Hubo un problema al enviar el mensaje, intenta nuevamente.");
      });
  };

  return (
    <div className="contact__form-content">
      <form ref={form} onSubmit={sendEmail}>
        <div className="name__container">
          <input type="text" name='firstname' placeholder='First Name' required />
          <input type="text" name='lastname' placeholder='Last Name' required />
        </div>
        <input type="email" name='email' placeholder='Email' required />
        <textarea name="message" placeholder='Message' rows="3" required></textarea>
        <button type="submit">SEND</button>
      </form>
    </div>
  );
};

export default ContactForm;
