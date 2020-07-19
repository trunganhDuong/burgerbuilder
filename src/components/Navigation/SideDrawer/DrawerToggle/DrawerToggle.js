import React from 'react';
import classes from './DrawerToggle.css';

const DrawerToggle = (props) => {
    return (
        <div onClick={props.onShowSideDrawer} className={classes.DrawerToggle}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default React.memo(DrawerToggle, () => true);