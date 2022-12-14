import React from 'react';
import c from './AboutMe.module.css';

const AboutUs = () => {
  return (
    <div data-testid="aboutus" className={c.wrapper}>
      <div className={c.logo}></div>
      <div className={c.text}>
        I am a web developer with experience building web applications. I have experience in
        creating a SPA application using React. (participated in the development team in the startup
        competition from ISsoft.) I constantly improve my technical skills. I have experience
        working in a team. In free time doing my Pet projects, reading books and working on
        improving my English. Open for your suggestions!
      </div>
    </div>
  );
};

export default AboutUs;
