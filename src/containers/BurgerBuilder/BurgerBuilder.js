import React from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';
import ModifyIngredientContext from '../../contexts/ModifyIngredientContext';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import firebase from '../../axios';
import withLoader from '../../components/HOCs/Loader/Loader';
import withNotification from '../../components/HOCs/Notification/Notification';

const INGREDIENT_PRICE = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}
class BurgerBuilder extends React.Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasing: false
    };

    onAddIngredient = (type) => {
        this.setState((prevState, prevProp) => {
            var prevIngredient = { ...prevState.ingredients };
            prevIngredient[type] = prevIngredient[type] + 1;
            var updatedPrice = prevState.totalPrice + INGREDIENT_PRICE[type];

            return Object.assign({}, prevState, { ingredients: prevIngredient, totalPrice: updatedPrice });
        });
    }

    onSubtractIngredient = (type) => {
        this.setState((prevState, prevProp) => {
            var prevIngredient = { ...prevState.ingredients };
            if (prevIngredient[type] <= 0) {
                return prevState;
            }

            prevIngredient[type] = prevIngredient[type] <= 0 ? 0 : prevIngredient[type] - 1;

            var updatedPrice = prevState.totalPrice - INGREDIENT_PRICE[type];
            updatedPrice = updatedPrice < 0 ? 0 : updatedPrice;

            return Object.assign({}, prevState, { ingredients: prevIngredient, totalPrice: updatedPrice });
        });
    }

    onPurchasing = () => {
        this.setState({
            purchasing: true
        });
    }

    onModalClose = () => {
        this.setState({
            purchasing: false
        });
    }

    onPurchasingContinue = () => {
        this.setState({
            purchasing: false
        });
        firebase
            .post("/orders.json", {
                ingredients: this.state.ingredients,
                price: this.state.totalPrice,
                customer: {
                    address: {
                        country: "VN",
                        street: "Do Duc Duc"
                    },
                    email: 'anhdt@gmail.com',
                    name: 'Trung Anh'
                },
                deliveryMethod: 'COD'
            })
            .then(res => {
                console.log("You have purchased successfully");
            })
    }

    render() {
        const availableInfo = {};
        var canOrder = false;
        Object.keys(this.state.ingredients).forEach((item, index) => {
            availableInfo[item] = this.state.ingredients[item] > 0;
            canOrder = this.state.ingredients[item] > 0 ? true : canOrder;
        });

        return (
            <React.Fragment>
                <Modal show={this.state.purchasing} onModalClose={this.onModalClose}>
                    <OrderSummary
                        show={this.state.purchasing}
                        ingredients={this.state.ingredients}
                        onModalClose={this.onModalClose}
                        onContinue={this.onPurchasingContinue}
                        price={this.state.totalPrice} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <ModifyIngredientContext.Provider value={{
                    addIngredient: this.onAddIngredient,
                    subtractIngredient: this.onSubtractIngredient,
                    availableInfo: availableInfo
                }}>
                    <BuildControls totalPrice={this.state.totalPrice} canOrder={canOrder} onPurchasing={this.onPurchasing} />
                </ModifyIngredientContext.Provider>
            </React.Fragment>
        );
    }
}

export default withNotification(withLoader(BurgerBuilder, firebase), firebase, "Order placed successfully");