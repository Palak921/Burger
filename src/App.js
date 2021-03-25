import React, { Component } from 'react';
import { Route, Switch,Link } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import ContactData from './containers/Checkout/ContactData/ContactData';
import Orders from './containers/Orders/Orders';

class App extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Layout>
            <Route path='/checkout' exact component={Checkout} />
            <Route path='/orders' exact component={Orders} />
            <Route path='/' exact component={BurgerBuilder} />
            {/* <Route path='/checkout/contactData' exact component={ContactData} /> */}
          </Layout>

        </Switch>
      </div>

    );
  }
}

export default App;
