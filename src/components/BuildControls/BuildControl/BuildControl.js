import React, { useContext } from 'react';
import classes from './BuildControl.css';
import ModifyIngredientContext from '../../../contexts/ModifyIngredientContext';

const BuildControl = (props) => {
    const context = useContext(ModifyIngredientContext);

    const addIngredient = () => {
        context.addIngredient(props.type);
    }

    const subtractIngredient = () => {
        context.subtractIngredient(props.type);
    }

    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button disabled={!context.availableInfo[props.type]} onClick={subtractIngredient} className={classes.Less}>Less</button>
            <button onClick={addIngredient} className={classes.More}>More</button>
        </div>
    );
}

export default React.memo(BuildControl);