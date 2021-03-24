import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-order';
import withErrorHandler from '../../hoc/withErrorModal/withErrorHandle';

class Orders extends Component {

    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        console.log("[CompenentWillMount]");
        axios.get('/orders.json')
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
                this.setState({ orders: fetchOrders, loading: false });
                console.log(this.state.orders);
            })
            .catch(err => {
                this.setState({ loading: false });
            })
    }

    render() {
        console.log("Hello");
        return (
            <div>

                {this.state.orders.map(
                    order => (<Order
                        key={order.id}
                        ingredients={order.ingredients}
                        price={+order.price} />)
                )
                }


            </div>
        );
    }
}
export default withErrorHandler(Orders, axios);