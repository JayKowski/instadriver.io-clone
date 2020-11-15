import React from 'react';
import PortfolioTab from './portfolioTab';
import portfolioTabData from '../data/portfolioTabs';
import '../stylesheets/Portfolio.css';

const tabOne = {
    float: 'right',
}

const tabTwo = {
    float: 'left',
    backgroundColor: '#F8BD00',
}

const bgColorTwo = {
    backgroundColor: '#F8BD00',
    color: '#FFF',
}

const bgColor = {
    backgroundColor: '#FEFCF5',
    color: '#3B3B3B',
}

function Portfolio() {
    return (
        <div className="portfolio">
            <div>
                <PortfolioTab data={portfolioTabData[0]} style={tabOne} bgColor={bgColor}/>
            </div>
            <div>
                <PortfolioTab data={portfolioTabData[1]} style={tabTwo} color={bgColorTwo}/>
            </div>
        </div>
    )
}

export default Portfolio;