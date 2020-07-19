import React from 'react';
import classes from './Button.css';

const Button = (props) => (
    <button
        onClick={props.click}
        className={[classes.Button, classes[props.type]].join(' ')}>
        {props.children}
    </button>
);

export default React.memo(Button);