import React from 'react';
import forDrivers from '../data/forDrivers';
import Tab from './Tab';
import '../stylesheets/tabContent.css'
import '../stylesheets/ForDrivers.css'

function ForDrivers() {

    const styles = {
      display: 'none',
    };

    return (
        <div style={styles} className="drivers-tab tab-content">
            {
                forDrivers.map( driver => (
                    <Tab data={driver}/>
                ))
            }
        </div>
    )
}

export default ForDrivers;