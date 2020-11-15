import React from 'react';
import '../stylesheets/SocialMedia.css';

function socialMedia(props) {
    return (
        <li className="med-link"><img alt="" src={props.data.link}/></li>
    )
}

export default socialMedia;