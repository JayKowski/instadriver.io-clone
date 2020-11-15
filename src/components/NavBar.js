import React from 'react';
import Button from './Button';
import { NavButtons } from '../data/navButtonData';
import BurgerMenu from './BurgerMenu';
import '../stylesheets/NavBar.css';

function NavBar(props) {
    // console.log(NavButtons)
    return (
        <div className="navbar">
            <div className="nav-img">
                <img alt="" style={{height: '50px'}}src="https://instadriver.co/img/logo.svg"></img>
            </div>
            <ul className="nav-links">
                {
                    NavButtons.map((btn) => (
                        <Button data={btn}/>
                    ))
                }
                <li className="burger-menu">
                    <BurgerMenu />
                </li>
            </ul>
        </div>
    )
}

export default NavBar;