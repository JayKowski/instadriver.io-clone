import React from 'react';
import '../stylesheets/Button.css';

function Button(props) {
    return (
        <li className="nav-link-btn">{props.data.name}</li>
    )
}

export default Button;