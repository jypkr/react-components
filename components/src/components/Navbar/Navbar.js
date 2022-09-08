import * as React from 'react';

import './Navbar.css';
import { Logo } from './components/Logo'; 
import { NavbarSteps } from './components/NavbarSteps';

const Navbar = (() => {

    return(
        <div className="navbar">
            <Logo />
            <NavbarSteps />
        </div>
    );
});

export default Navbar;