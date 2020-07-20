import React from 'react';
import classes from './Spinner.css';

const Spinner = (props) => props.show ? <div className={classes.Spinner}></div> : null;

export default React.memo(Spinner, (prev, next) => prev.show === next.show);