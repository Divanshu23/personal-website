import React from 'react';
import "./project.css"
const Project = ({img, link, desc}) => {
  return (
    <div className='p'>
        <a href={link} target='_blank' rel="noreferrer">
            <img src={img} alt='' className='p-img' />
            {/* <p className="p-browser">{desc}</p> */}
        </a>
    </div>
  );
};

export default Project;
