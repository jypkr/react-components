import * as React from 'react';

import './Button.css';

const Button = ((props) => {
    const handleClick = (e) => {
        console.log(props);
        alert('123');
        window.location(props.location);
    }

    return (
        <button class='button-26' type='button' onClick={handleClick}>{props.text}</button>
    );
});

export default Button;