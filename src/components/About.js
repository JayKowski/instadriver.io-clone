import React from 'react';
import aboutData from '../data/aboutData';
import Tab from './Tab';
import '../stylesheets/About.css';

const color = {
    color: '#fff',
}

function About() {
    return (
        <div className="about">
            {
                aboutData.map( about => (
                    <Tab data={about} color={color} />
                ))
            }
        </div>
    )
}

export default About;