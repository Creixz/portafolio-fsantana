import React from 'react'
import './Personal.css'
import { FaReact } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";

const Personal = () => {
  return (
    <section className='personal__container'>
      <div className="personal__content">
        <h2>Building Digital Experiences That Inspire</h2>
        <p>Passionate Frontend Developer | Transforming Ideas into Seamless and Visually Stunning Web Solutions</p>
      </div>
      <div className="personal__img">
        <div>
          <div className="tech__icon">
            <FaReact style={{color: '#04d8f9'}}/>
          </div>
          <img className='fsantana__img' src="../../../fsantana.jpg" alt="" />
        </div>

        <div>
          <div className="tech__icon">
            <FaHtml5 style={{color: 'orangered'}}/>
          </div>
          <div className="tech__icon">
            <FaCss3Alt style={{color: '#264de4'}}/>
          </div>
          <div className="tech__icon">
           <RiJavascriptFill style={{color: '#f7df1e'}}/>
          </div>
        </div>
      </div>
      

    </section>
  )
}

export default Personal