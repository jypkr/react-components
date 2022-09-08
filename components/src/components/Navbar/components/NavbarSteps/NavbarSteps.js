import * as React from 'react';

import './NavbarSteps.css';

const NavbarSteps = (() => {
    return (
        <div className='container'>
            <ul className='steps'>
                <li className='active'>Step 1</li>
                <li>Step 2</li>
                <li>Step 3</li>
                <li>Step 4</li>
            </ul>
        </div>
    );
})

export default NavbarSteps;