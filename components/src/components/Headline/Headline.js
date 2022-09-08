import * as React from 'react';

import { Tv } from '../Tv';

import './Headline.css';

const Headline = (() => {
    return (
        <div className='Headline'>
            <div class="left-box">
                <Tv />
            </div>
            <div class="right-box">
            <p>Create Digital Menu</p>
            <p>in 10 mins</p>
            </div>
        </div>
    );
});

export default Headline;