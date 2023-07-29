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
        <p>Frontend Development</p>
        <p>React</p>
        <p>Web Application</p>
        <p>WordPress Development</p>
        <p>Startups</p>
        <p>Pizza !</p>
        <p>MERN Stack</p>
      </div>

      <hr />

      <h3>
        MINDING A PROJECT?
        <span style={{position:'absolute',right:'10%'}}><a href="mailto:adityabathani.4478@gmail.com">cOnTaCt mE</a></span>
      </h3>
      <hr style={{marginBottom:'40px'}}/>
    </div>

  </div>
  <Footer/>
</>
);

export default Contact;
