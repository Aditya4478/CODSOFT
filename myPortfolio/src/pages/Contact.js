import React from 'react';
import './Contact.css';

import Footer from '../components/Footer';

const Contact = () => (
  <>
  <div className="contact" id="contact">
    <div className="footer-left">
      <h1>
        Lets have
        {' '}
        <br />
        chai pe
        <br />
        {' '}
        CHARCHA
      </h1>
    </div>
    <div className="footer-right">
      <h3>I'M ALWAYS INTERESTED ABOUT :-</h3>
      <div className="interests">
        <p>Product Managemnt & Marketing</p>
        <p>Angular Front-end</p>
        <p>User Experience</p>
        <p>Product Launch</p>
        <p>Business Analyst</p>
        <p>Startups</p>
        <p>Innovations</p>
        <p>Pizza !</p>
        <p>Coffee !</p>
      </div>

      <hr />

      <h3>
        MINDING A PROJECT?
        <span style={{position:'absolute',right:'10%'}}><a target='_blank' href="https://linktr.ee/adityabathani">cOnTaCt mE</a></span>
      </h3>
      <hr style={{marginBottom:'40px'}}/>
    </div>

  </div>
  <Footer/>
</>
);

export default Contact;
