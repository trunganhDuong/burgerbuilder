import React from 'react';
import classess from './BurgerIngredient.css';
import PropTypes from 'prop-types';

const BurgerIngredient = (props) => {
    let ingredient = null;

    switch (props.type) {
        case 'bread-bottom':
            ingredient = <div className={classess.BreadBottom}></div>;
            break;
        case 'bread-top':
            ingredient =
                <div className={classess.BreadTop}>
                    <div className={classess.Seeds1}></div>
                    <div className={classess.Seeds2}></div>
                </div>;
            break;
        case 'meat':
            ingredient = <div className={classess.Meat}></div>;
            break;
        case 'cheese':
            ingredient = <div className={classess.Cheese}></div>;
            break;
        case 'salad':
            ingredient = <div className={classess.Salad}></div>;
            break;
        case 'bacon':
            ingredient = <div className={classess.Bacon}></div>;
            break;
        default:
            ingredient = null;
            break;
    }

    return ingredient;
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;