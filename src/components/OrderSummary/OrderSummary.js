import React from 'react';
import Button from '../UI/Button/Button';

const OrderSummary = (props) => {
    return (
        <React.Fragment>
            <h3>Your Order</h3>
            <p>A delicious burger with following ingredients:</p>
            <ul>
                {
                    Object.keys(props.ingredients).map((item) => {
                        return (
                            <li key={item}>
                                <span style={{ textTransform: 'capitalize' }}>{item}</span>: {props.ingredients[item]}
                            </li>);
                    })
                }
            </ul>
            <p><strong>Total Price: ${props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button click={props.onModalClose} type="Danger">CANCEL</Button>
            <Button click={props.onContinue} type="Success">CONTINUE</Button>
        </React.Fragment>
    );
}

const shouldNotRerender = (prevProps, nextProps) => {
    return prevProps.show === nextProps.show;
}

export default React.memo(OrderSummary, shouldNotRerender);