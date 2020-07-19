import React from 'react';
import classes from './Backdrop.css';

const Backdrop = (props) => {
    return (
        props.show ? <div onClick={props.onClick} className={classes.Backdrop}></div> : null
    );
}

export default React.memo(Backdrop, (prev, next) => prev.show === next.show);