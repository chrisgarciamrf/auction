import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="container">
      <div className="row info">
        <div className="name">Christopher García Abril</div>
        <div className="job">Javascript Ninja</div>
        <div className="phone">(+34) 648530981</div>
        <div className="from">Barcelona - Spain</div>
      </div>
      <div className="row social">
        <a href="mailto:garabchris@gmail.com">
          <img className="email" alt="Gmail" src="gmail.svg"/>
        </a>
        <a href="https://www.linkedin.com/in/penchochris">
          <img alt="Linkedin" className="linkedin" src="linkedin.svg"/>
        </a>
        <a href="https://www.github.com/chrisgarciamrf" >
          <img alt="Github" className="github" src="github.svg"/>
        </a>
      </div>
    </div>
  );
}

export default About;