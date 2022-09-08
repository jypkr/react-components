import * as React from 'react';

import './Logo.css';
import logoName from './img/Logo+Name.png';

const Logo = (() => {
    return (
            <div className="logo">
            <a href="#">
                <img src={logoName} alt="logo"></img>
            </a>
            </div>
    );
});

export default Logo;