import React from 'react';
import ForEmployers from './ForEmployers';
import ForDrivers from './ForDrivers';
import '../stylesheets/Services.css';

function tabCnt(e) {
    const x = window.matchMedia("(max-width: 660px)");
    const employers = document.querySelector('.employers-tab');
    const drivers = document.querySelector('.drivers-tab');
    
    if(e.target.className === 'for-employers') {
        employers.style.display = x.matches ? 'block' : 'flex';
        drivers.style.display = 'none';
        e.target.style.backgroundColor = ''
        e.target.style.border = '1px solid #e9e9e9;'
        // e.target.style.display = 
    } else if (e.target.className === 'for-drivers') {
        drivers.style.display = x.matches ? 'block' : 'flex';
        employers.style.display = 'none';
    }
}

function Services() {
    return (
        <div className="services">
            <div>
                <h2 className="services-heading">How It Works</h2>
                <img alt="" src="https://instadriver.co/img/ocean-waves.png" />
                <div className="services-toggle">
                    <span onClick={tabCnt} className="for-employers">For Employers</span>
                    <span onClick={tabCnt} className="for-drivers">For Drivers</span>
                </div>
                <ForEmployers />
                <ForDrivers />
            </div>
        </div>
    )
}

export default Services;