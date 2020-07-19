import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients).map((item, index) => {
        var count = props.ingredients[item];
        return (new Array(count)).fill().map((_, i) => {
            return <BurgerIngredient key={item + i} type={item}/>
        })
    }).reduce((prev, curr)=> {
        return prev.concat(curr);
    });
    
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {
                transformedIngredients && transformedIngredients.length > 0 ? transformedIngredients : <p>Please start adding ingredients</p>
            }
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default Burger;