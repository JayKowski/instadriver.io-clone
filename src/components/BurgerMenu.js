import React from 'react';
import '../stylesheets/BurgerMenu.css';

function BurgerMenu() {
    return (
        <div>
            <button className="menu-btn"><span className="menu-name">Menu</span><img alt="" src="https://instadriver.co/img/menu.svg"/></button>
        </div>
    )
}

export default BurgerMenu;