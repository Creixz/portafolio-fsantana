import React, { useRef } from 'react'
import './WorkExperience.css'
import { WORK_AND_PROYECT_EXPERIENCE } from '../../utils/data'
import ExperienceCard from './experienceCard/ExperienceCard'
import Slider from 'react-slick'
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const WorkExperience = () => {

    const sliderRef = useRef();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const slideRight = () => {
        sliderRef.current.slickNext();
    }

    const slideLeft = () => {
        sliderRef.current.slickPrev();
    }

    return (
        <div id='experience' className="experience__container">
            <h5>Work and Proyect's Experience</h5>
            <div className="experience__content">
                <div className="arrow__right">
                    <FaChevronRight onClick={slideRight}/>
                </div>
                <div className="arrow__left">
                    <FaChevronLeft onClick={slideLeft}/>
                </div>
                <Slider ref={sliderRef} {...settings} >
                    {WORK_AND_PROYECT_EXPERIENCE.map((item) => (
                        <ExperienceCard key={item.title} details={item} />
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default WorkExperience