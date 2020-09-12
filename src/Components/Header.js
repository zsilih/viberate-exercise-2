import React from 'react';

function Header() {
    return (
        <header className="header">
        <div className="page">
            <a href="file:///C:/Users/ViberatePC23/PROJECTS/Viberate3.0/react-com/src/static/exercise-01.html#" className="logo">
                <img src="./images/svg/logo-v.svg" alt="Viberate"/> Viberate
            </a>
            <nav className="navigation-primary">
                <ul className="menu-sys">
                    <li>
                        <button className="btn btn-menu search">Search</button>
                    </li>
                    <li>
                        <button className="btn btn-menu more">More</button>
                    </li>						
                </ul>						
                <ul className="menu">
                    <li>
                        <a href="">Artist 1</a>
                    </li>
                    <li>
                        <a href="">Artist 2</a>
                    </li>
                    <li>
                        <a href="">Artist 3</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    )
}


export default Header;