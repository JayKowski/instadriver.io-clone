import React from 'react';
import '../stylesheets/UnderNav.css'

function UnderNav() {
    return (
        <div className="under-nav">
            <div className="under-nav-content">
                <img className="message" alt="" src="https://instadriver.co/img/message.svg"/>
                <span className="say-something">saysomething@instadriver.co</span>
            </div>
        </div>
    )
}

export default UnderNav;