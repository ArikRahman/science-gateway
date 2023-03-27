import React from 'react';
import {ReactComponent as TAMULogo} from './TAM-PrimaryMarkB-white.svg';
import './NavbarStyles.css';


function Navbar() { // function name is always file name
    return (
        <>
            <nav>
                <a href="index.html">
                    <TAMULogo />
                </a>

                <div>
                    <ul id="navbar"> {/* create an id to fix the list in CSS */}
                        <li><a className="active"
                        href="index.html">Data</a></li>
                        <li><a href="index.html">
                            API
                            </a>
                        </li>
                        <li><a href="index.html">VPN</a></li>
                        <li><a href="index.html">Contact</a></li>
                        <li><a href="index.html">About Us</a></li>
                    </ul>

                </div>

                <div id="mobile"> {/* create responsive navbar for mobile */}
                    <i className="fas fa-bars"></i> {/* hamburger icon navbar (3 lines stacked)*/}
                    <i className="fas fa-times"></i> {/* close icon */}
                </div>
            </nav>
        </>
    );
};

export default Navbar;