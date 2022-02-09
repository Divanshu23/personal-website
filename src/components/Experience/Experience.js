import React from 'react';
import "./experience.css";

const Experience = () => {
  return (
    <>
      <div className='outside'>
        <h1 className='title'>Professional Experience</h1>
        <div className='container'>
          <div className='company'>
          <p>Full-Stack Developer</p>
            
          </div>
          <div className='position'>
          <p>Okanagan School of Arts</p>
            <p id="date">Dec 2021 - Current</p>
          </div>
          <div className='text'>
            <ul>
              <li>Led the transformation of client's drag and drop based Website and the website's Admin Panel to a MERN stack framework, resulting in efficiency gains</li>
              <li>including marketing emails, surveys, membership tracking which reduced the manual effort by 2-3 hours.</li>
              <li>Transformation through centrally connected database: Transformed entire backend using Mongo DB, so that it is non replicated and flows into both, the website and the admin panel. Designed the UX of the admin panel on top of the database for enabling customer analytics around key KPIs such as memberships, sales and participation </li>
              <li>  Encapsulation of code (for non technical users): Created customized features that let the non-technical clients edit their websites with minimal/no intervention to the base code.</li>
            </ul>
          </div>
        </div>
        <br />
        <div className='container'>
          <div className='company'>
            <p>NETINT Technologies</p>
          </div>
          <div className='position'>
            <p>Firmware Co-op Engineer</p>
            <p id="date">Dec 2019 - Sept 2021</p>

          </div>
          <div className='text'>
            <ul>
              <li>As a part of the test team, developed and optimized python-based test scripts to enhance the testing framework</li>
              <li>Automated the Windows firmware upgrade process that helped the Test team and Development team save around 30 minutes of manual work, every time this upgrade is required.</li>
              <li>Automated compilation of FFmpeg using VS2019; Helped increase test coverage for windows and saved Test team 20 minutes of manual compilation work</li>
              <li>Experienced in configuring docker and android environment to run video transcoding</li>
              <li>Improved developer productivity by developing a linter tool that enforces company coding standard.</li>
              <li> Helped improve developer productivity by developing a linter tool that enforces company coding standard</li>
              <li>Maintain operations of automated Linux testing labs</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
};

export default Experience;
