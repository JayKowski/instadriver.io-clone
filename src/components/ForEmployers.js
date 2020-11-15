import React from 'react';
import { forEmployers } from '../data/forEmployers';
import Tab from './Tab';
import '../stylesheets/tabContent.css';

function ForEmployers() {
    return (
        <div className="employers-tab tab-content">
            {
                forEmployers.map( employer => (
                    <Tab data={employer}/>
                ))
            }
        </div>
    )
}

export default ForEmployers;