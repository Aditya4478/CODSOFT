import React from 'react';
import './About.css';
import MsOffice from '../assets/msoffice.png'
import PowerToys from '../assets/powertoys.png'
import Figma from '../assets/figma.png'
import GitLogo from '../assets/git.png'
import GMeet from '../assets/meet.png'
import Zoomlogo from '../assets/zoom.webp'
import SkypeLogo from '../assets/skype.png'
import Slack from '../assets/slack.png'
import Canva from '../assets/canva.png'
import CDT from '../assets/cdt.png'
import CSS from '../assets/css.png'
import Angular from '../assets/angular.png'
import Typescript from '../assets/typescript.webp'
import Tailwind from '../assets/tailwind.png'
import IntellijIdea from '../assets/intellij-ida.png'
import Trello from '../assets/trello.svg'
import NextJS from '../assets/next.webp'
import JavaScript from '../assets/javascript.png'
import Analytics from '../assets/analytics.png'

const About = () => (
  <section className="about" id="about">
    <div className="about-me">
      <h2 className="title about-title">aBOUT mE</h2>
      <p className="paragraph about-para">
      I started my programming journey in 2020, initially as a web developer. Over time, my focus shifted to product management, where I've leveraged my technical background to deliver innovative, user-centric web apps. With experience in managing projects for diverse clients, both independently and in teams, I’ve honed skills in product strategy, UX optimization, and cross-functional collaboration to drive impactful results.
      </p>
      <button className="hire-me">
        <a href="https://drive.google.com/file/d/1IkeeVElk97rqtrTpJMRJ4Id2PS_D16Ja/view?usp=sharing" target="_blank" rel="noreferrer">
          GET MY CV
        </a>
      </button>
    </div>
    <div className="about-skills">
      <h2 className="skill-title">Front-End</h2>
      <div className="skills">
        <div className="skill">
          <img
            src={Angular}
            alt=""
          />
          <p>Angular</p>
        </div>
        <div className="skill">
          <img
            src={Typescript}
            alt=""
          />
          <p>Typescript</p>
        </div>
        <div className="skill">
          <img
            src={Tailwind}
            alt=""
          />
          <p>Tailwind</p>
        </div>
        <div className="skill">
          <img
            src={CSS}
            alt=""
          />
          <p>CSS3</p>
        </div>
        <div className="skill">
          <img
            src={JavaScript}
            alt=""
          />
          <p>JavaScript</p>
        </div>
        <div className="skill">
          <img
            src={NextJS}
            alt=""
          />
          <p>Next.js</p>
        </div>
      </div>

      <h2 className="skill-title">Product Tools</h2>
      <div className="skills">
        <div className="skill">
          <img src={GitLogo} alt="" />
          <p>Git/GitHub</p>
        </div>
        <div className="skill">
          <img src={IntellijIdea} alt="" />
          <p>Intellij IDEA</p>
        </div>
        <div className="skill">
          <img src={Trello} alt="" />
          <p>Trello</p>
        </div>
        <div className="skill">
          <img src={CDT} alt="" />
          <p>Chrome Dev Tools</p>
        </div>
        <div className="skill">
          <img src={Analytics} alt="" />
          <p>Google Analytics</p>
        </div>
        <div className="skill">
          <img src={MsOffice} alt="" />
          <p>MS-Office</p>
        </div>
        <div className="skill">
          <img src={PowerToys} alt="" />
          <p>PowerToys</p>
        </div>
      </div>
      <h2 className="skill-title">Product Design</h2>
      <div className="skills">
        <div className="skill">
          <img src={Canva} alt="" />
          <p>Canva</p>
        </div>
        <div className="skill">
          <img src={Figma} alt="" />
          <p>Figma</p>
        </div>
      </div>
      <h2 className="skill-title">Communication</h2>
      <div className="skills">
        <div className="skill">
          <img src={Slack} alt="" />
          <p>Slack</p>
        </div>
        <div className="skill">
          <img src={SkypeLogo} alt="" />
          <p>Skype</p>
        </div>
        <div className="skill">
          <img src={GMeet} alt="" />
          <p>Google Meet</p>
        </div>
        <div className="skill">
          <img src={Zoomlogo} alt="" />
          <p>Zoom</p>
        </div>
      </div>
      <h2 className="skill-title">Soft Skills</h2>
      <div className="skills">
        <p className="soft-skill" style={{color:'#37a956'}}>Strategic Decision Making</p>
        <p className="soft-skill" style={{color:'#37a956'}}>Go-to-market Strategy</p>
        <p className="soft-skill" style={{color:'#37a956'}}>Prioritization and RoadMap</p>
        <p className="soft-skill" style={{color:'#37a956'}}>Data Analytics & Metrics</p>
        <p className="soft-skill" style={{color:'#37a956'}}>User research and Customer Insights</p>
        <p className="soft-skill" style={{color:'#37a956'}}>Leadership</p>
        <p className="soft-skill" style={{color:'#37a956'}}>A/B Testing</p>
        <p className="soft-skill" style={{color:'#37a956'}}>Multi Tasking</p>
        <p className="soft-skill" style={{color:'#37a956'}}>Critical Thinking</p>
        <p className="soft-skill" style={{color:'#37a956'}}>Time-Resource-Project Managemnt</p>
      </div>
    </div>

  </section>
);

export default About;
