import * as actionTypes from './actionTypes';
import axios from '../../axios-order';

export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    }
}

export const purchaseBurgerFailed = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    }
}

export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    }
}

export const purchaseBurger = (orderData, token) => {
    return dispatch => {
        dispatch(purchaseBurgerStart());
        axios.post('/orders.json?auth='+token, orderData)
            .then(response => {
                console.log(response.data);
                dispatch(purchaseBurgerSuccess(response.data.name, orderData))
            })
            .catch(error => {
                dispatch(purchaseBurgerFailed(error))
            });
    }
}

export const fetchOrdersSuccess = (orders) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    }
}

export const fetchOrdersFail = (error) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAIL,
        error: error
    }
}

export const fetchOrdersStart = () => {
    return {

        type: actionTypes.FETCH_ORDERS_START
    }
}

export const fetchOrder = (token) => {
    return (dispatch, getState) => {
        dispatch(fetchOrdersStart())
        console.log("[CompenentWillMount]");
        axios.get('/orders.json?auth=' + token)
            .then(res => {
                // console.log(res.data);
                const fetchOrders = [];
                for (let key in res.data) {
                    fetchOrders.push(
                        {
                            ...res.data[key],
                            id: key
                        });
                }
                dispatch(fetchOrdersSuccess(fetchOrders))
                console.log(this.state.orders);
            })
            .catch(err => {
                dispatch(fetchOrdersFail())
            })
    }
}


export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    }
}


