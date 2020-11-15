import React from 'react';
import '../stylesheets/PortfolioTab.css';

function PortfolioTab(props) {
    return (
        <div style={ props.color || props.bgColor } className="portfolio-tab">
            <div style={props.style} className="portfolio-tab-content">
                <img alt="" src={props.data.img1}/>
                <h2>{props.data.h2}</h2>
                <img alt="" src={props.data.img2}/>
                <p>{props.data.p}</p>
            </div>
        </div>
    )
}

export default PortfolioTab;