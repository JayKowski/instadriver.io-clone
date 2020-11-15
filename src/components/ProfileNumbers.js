import React from 'react';
import profileNumbers from '../data/profileNumbers';
import ProfNumBox from './ProfNumBox';
import '../stylesheets/ProfileNumbers.css';

const leftHeadClass = 'left-heading';
const rightHeadClass = 'right-heading';
const leftBoxClass = 'left-box';
const rightBoxClass = 'right-box';

function ProfileNumbers() {
    return (
        <div className="profile-nums">
            <h2 className="profile-head">Driver Profiles posted on Instadriver</h2>
            <div className="profile-stats">
                <ProfNumBox data={ profileNumbers[0] } boxClass={ leftBoxClass } headingClass={leftHeadClass}/>
                <ProfNumBox data={ profileNumbers[1] } boxClass={ rightBoxClass } headingClass={rightHeadClass} />
            </div>
        </div>
    )
}

export default ProfileNumbers;