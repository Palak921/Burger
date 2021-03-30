import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-order';
import withErrorHandler from '../../hoc/withErrorModal/withErrorHandle';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';

import { connect } from 'react-redux';


class Orders extends Component {

    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        this.props.onFetch(this.props.token)

    }

    render() {
        let orders = <Spinner />
        if (!this.props.loading) {
            orders = this.props.orders.map(
                order => (<Order
                    key={order.id}
                    ingredients={order.ingredients}
                    price={+order.price} />)
            )

        }
        return (
            <div>
                {orders}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        orders: state.orders.orders,
        loading: state.orders.loading,
        token: state.auth.token
    }
}

const mapDispatchtoProps = dispatch => {
    return {
        onFetch: (token) => dispatch(actions.fetchOrder(token))
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(withErrorHandler(Orders, axios));