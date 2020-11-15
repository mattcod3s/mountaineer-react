import React from 'react';
import './NavBar.scss';

function NavBar() {

    return(
        <div className="navBar__main">
            <div className="navBar__content">
                <div className="navBar__conq">
                    <h3>CONQUERED</h3>
                </div>
                <div className="navBar__plan">
                    <h3>PLANNED</h3>
                </div>
            </div>
        </div>
    )
}

export default NavBar;