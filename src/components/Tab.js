import React from 'react';
import '../stylesheets/Tab.css';

function Tab(props) {
    return (
        <div className="tab-data">
            <img alt="" src={props.data.img} />
            <h4 style={props.color} >{props.data.h4}</h4>
            <p style={props.color}>{props.data.p}</p>
        </div>
    )
}

export default Tab;