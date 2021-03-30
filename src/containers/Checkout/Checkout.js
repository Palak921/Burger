import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';


import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
    state = {
        route: false
    }



    componentDidUpdate() {
        console.log(this.state.totalPrice);
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.setState({ route: true })
        console.log(this.props.match);
        // this.props.history.replace('/checkout/contactData');
        // this.props.history.push('/contactData');



    }

    render() {
        console.log(this.props);
        let contact = null;
        if (this.state.route) {

            contact = <ContactData />
        }
        let summary = <Redirect to="/" />
        if (this.props.ings) {
            const purchaseRedirect = this.props.purchased ? <Redirect to='/' /> : null;
            summary = <div>
                {purchaseRedirect}
                <CheckoutSummary
                    ingredients={this.props.ings}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler} />
                <Route path={'/contactData'}
                    component={ContactData} />
            </div>
        }
        return (
            <div>

                {summary}
                {contact}
                {/* <Router>
                    <Route path={this.props.match.path + '/contactData'}
                        component={ContactData} />
                </Router> */}

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        purchased: state.orders.purchased
    }
}

// const mapDispatchtoProps = dispatch => {
//     return {
//         onInitPurchase: dispatch => (actions.purchaseInit)
//     }
// }


export default connect(mapStateToProps)(Checkout);