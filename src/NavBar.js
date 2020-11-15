import React, {useState, useEffect} from 'react';
import './NavBar.scss';

function NavBar() {

    return(
    <div className="navBar__main">
        <div className="navBar__content">
            <div className="">
                <h3>CONQUERED</h3>
            </div>
            <div className="">
                <h3>PLANNED</h3>
            </div>
        </div>
    </div>
    )
}

export default NavBar;