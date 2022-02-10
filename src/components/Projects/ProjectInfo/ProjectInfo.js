import React from 'react'
import "./projectInfo.css";

const ProjectInfo = ({title, desc}) => {
    return (
        <>
        <p className='title-desc'>Project Descriptions</p>
        <div className='projectContainer'>
                <div className='project'>
                    <p className='ptitle'>StreamExpert</p>
                    <p className='pdesc'>A react application based on RESTful architecture developed using Vanilla javascript where user can stream there faviourate show, game or leetcode session.</p>
                </div>
                <div className='project'>
                    <p className='ptitle'>ShopOn</p>
                    <p className='pdesc'>A MERN Stack ecommerce website where strip API has been used to handle payments.</p>
                </div>
                <div className='project'>
                    <p className='ptitle'>Personal-Drive</p>
                    <p className='pdesc'>Turn your hardrive into your own cloud center to store files in the local netword. Technologies used- Python, MERN Stack, docker</p>
                </div>
                <div className='project'>
                    <p className='ptitle'>RedRoom</p>
                    <p className='pdesc'>Android App for alerting people with new about wildfires in British Columbia</p>
                </div>
        </div>
        </>
    )
}

export default ProjectInfo;