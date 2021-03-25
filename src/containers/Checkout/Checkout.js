import React, { Component } from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
    state = {
        ingredients: null,
        price: 0,
        route: false
    }

    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        for (let param of query.entries()) {
            // ['salad', '1']
            if (param[0] === 'price') {
                price = param[1];
            } else {
                ingredients[param[0]] = +param[1];
            }
        }
        this.setState({ ingredients: ingredients, totalPrice: price });
    }


    componentDidUpdate() {
        console.log(this.props.totalPrice);
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.setState({ route: true })
        // this.props.history.replace('/checkout/contactData');
    }

    render() {
        console.log(this.props);
        let contact = null;
        if (this.state.route) {

            contact = <ContactData
                ingredients={this.state.ingredients}
                price={this.state.price}
                {...this.props} />
        }
        return (
            <div>

                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler} />
                <h1>{this.props.price}</h1>

                {contact}
                {/* <Route
                    path={this.props.match.path + '/contactData'}
                    render={(props) => {
                        return (<ContactData
                            ingredients={this.state.ingredients}
                            price={this.state.totalPrice}
                            {...props} />)

                    }}

                /> */}

            </div>
        );
    }
}

export default Checkout;