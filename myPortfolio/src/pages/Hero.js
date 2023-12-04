import React from 'react';
import './Hero.css';
import { Link } from 'react-scroll';
import Imu from '../assets/imu.png';

const Hero = () => (
  <div className="hero" id="home">
    <div className="hero-overlay">
      <div className="description">
        <h2 className="title">hELLO. i aM <span style={{color:'lightgreen'}} className='title'> A d i T y A</span> !</h2>
        <h3 className="tagline">Breaking keyboards and pushing pixels since 2020</h3>
        <p className="paragraph">I'm passionate for Hacking, Software Engineering & Web-Development having experience of 3+ years. I have done solo projects and mostly LEAD group projects by motivating members to achieve common targets. My Career Objective is to work in a dynamic, professional & innovative environment with my creativity and ‘Out of the box’ thinking to achieve conducive output!</p>
        <div className="hero-btns">
          <button className="hire-me">
            <a href="https://drive.google.com/file/d/1z2G10Up9tPTUkTjfwBH-NnK8jwGjZeJz/view?usp=sharing" target="_blank" rel="noreferrer">
              GET MY CV
            </a>
          </button>
          <button className="lets-talk">
            <Link spy smooth offset={50} duration={500} to="contact">
              LET'S TALK
            </Link>
          </button>
        </div>
      </div>
      <img src={Imu} alt="prantosh" className="hero-image" />
    </div>
    <div className="social-icons">
        <a href="https://github.com/Aditya4478" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-github" />
        </a>
        <a href="https://www.linkedin.com/in/aditya-bathani/" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-linkedin-in" />
        </a>
        <a href="https://www.youtube.com/@gsocexpress" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-youtube" />
        </a>
        <a href="https://www.buymeacoffee.com/adityaguide" target="_blank" rel="noreferrer">
          <i className="fa fa-coffee" />
        </a>
      </div>
  </div>
);

export default Hero;
