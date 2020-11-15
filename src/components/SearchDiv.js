import React from 'react';
import '../stylesheets/SearchDiv.css'

function SearchDiv() {
    return (
        <div className="search-div">
            <div className="search-box">
                <p>Find and Hire A Driver. Its Free <br /> and No Login Requirement</p>
                <form className="search-form">
                    <input type="text" placeholder="Select Category" /><br />
                    <input type="text" placeholder="Enter a location" /><br />
                    <input type="text" placeholder="Select Search Type" /><br />
                    <div className="form-footer">
                        <span className="filter-btn"><img alt="" src="https://instadriver.co/img/filter.svg" /></span>
                        <span className="search-btn">Search</span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SearchDiv;