import React from 'react';
import Project from '../Project/Project';
import "./projectList.css";
import { projects } from '../data';

const ProjectList = () => {
  return (
    <div className='pl'>
        <div className='pl-texts'>
            <h1 className='pl-title'>Developing and Innovating</h1>
            <p className='pl-desc'>
                Here are some of the projects I like to show people. I have developed these projects outside and in school.
            </p>
        </div>
        <div className='pl-list'>
            {projects.map((item) => (
                <Project img={item.img} desc={item.desc} key={item.id} link={item.link} />
            ))}
        </div>
    </div>
  );
};

export default ProjectList;
