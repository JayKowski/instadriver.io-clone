import React from 'react';
import '../stylesheets/FooterLinkDiv.css';

function FooterLinkDiv(props) {
    return (
        <div className="footer-links">
            <h4>Useful links</h4>
            <a className="link" href="#root">{props.data.link1}</a>
            <a className="link" href="#root">{props.data.link2}</a>
            <a className="link" href="#root">{props.data.link3}</a>
            <a className="link" href="#root">{props.data.link4}</a>
        </div>
    )
}

export default FooterLinkDiv;