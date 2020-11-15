import React from 'react';
import './MainPage.scss';
import NavBar from './NavBar';

function MainPage() {

    return(
        <div className="main">
            <div className="main__img"></div>
            <div className="main__content">
                <div className="topText">
                    <h1>MOUNTAINEER</h1>
                </div>
                <NavBar />
            </div>
        </div>
    )
}

export default MainPage;