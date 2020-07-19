import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
];
const BuildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p>Current price: <strong>${props.totalPrice.toFixed(2)}</strong></p>
            {
                controls.map((item, index) => {
                    return <BuildControl key={item.type} label={item.label} type={item.type} />
                })
            }

            <button onClick={props.onPurchasing} className={classes.OrderButton} disabled={!props.canOrder}>ORDER NOW</button>
        </div>
    );
}

export default BuildControls;