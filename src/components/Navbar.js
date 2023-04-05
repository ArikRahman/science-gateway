import React, { Component } from 'react';
import {ReactComponent as TAMULogo} from './TAM-PrimaryMarkB-white.svg';
import './NavbarStyles.css';


class Navbar extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render() {
        return (
            <>
                <nav>
                    <a href="index.html">
                        <TAMULogo />
                    </a>

                    <div>
                        <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}> {/* create an id to fix the list in CSS */}
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

                    <div id="mobile" onClick = {this.handleClick}> {/* create responsive navbar for mobile */}
                        <i id="bar"
                        className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}
                        ></i>
                    </div>
                </nav>
            </>
    );
}
}

export default Navbar;