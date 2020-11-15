import React from 'react';
import '../stylesheets/ProfNumBox.css';

function ProfNumBox(props) {
    return (
        <div className={props.boxClass}>
            <h2 className={props.headingClass}>{props.data.h2}</h2>
            <h4>{props.data.h4}</h4>
        </div>
    )
}

export default ProfNumBox;