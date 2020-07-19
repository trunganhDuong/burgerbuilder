import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem href="/" active>
                A Link
            </NavigationItem>
            <NavigationItem href="/">
                Checkout
            </NavigationItem>
        </ul>
    );
}

export default React.memo(NavigationItems, () => true);