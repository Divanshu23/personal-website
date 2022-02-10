import React from 'react';
import Project from '../Project/Project';
import "./projectList.css";
import {projects} from '../data';
import ProjectInfo from '../ProjectInfo/ProjectInfo';

const ProjectList = () => {
  return (
    <div id="projects" className='pl'>
        <div className='pl-texts'>
            <h1 className='pl-title'>Developing and Innovating</h1>
            <p className='pl-desc'>
                Here are some of the projects I like to show people. I have developed these projects outside and in school.
            </p>
        </div>
        <ProjectInfo />
        <p className='project-gallery'>Project Gallery</p>
        <div className='pl-list'>
            {projects.map((item) => (
                <Project img={item.img} desc={item.desc} key={item.id} link={item.link} />
            ))}
        </div>
    </div>
  );
};

export default ProjectList;
