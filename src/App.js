import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';
class App extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Layout>
            <Route path='/checkout' exact component={Checkout} />
            <Route path='/orders' exact component={Orders} />
            <Route path='/Auth' exact component={Auth} />
            <Route path='/' exact component={BurgerBuilder} />
          </Layout>

        </Switch>
      </div>

    );
  }
}

export default App;
