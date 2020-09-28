import React from 'react';

import './header.styles.scss';

import {Link} from 'react-router-dom';

const Header = () => {


    return (
        <div className="header">
            <div className="logo-container">
                <Link >
                    HELLO
                </Link>
            </div>
            <div className="options">
                <Link to="/" className="logo-container">
                    HOME
                </Link>
                <Link to="/contact" className="logo-container">
                    CONTACT
                </Link>
                <Link className="logo-container">
                    HELLO
                </Link>
                <Link className="logo-container">
                    HELLO
                </Link>
            </div>
        </div>
    )

}

export default Header;