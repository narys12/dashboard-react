import React from 'react';
import LayoutContainer from '../../containers/LayoutContainer'
import DashboardView from '../ContentView/DashboardView'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'

const OffersView = () => (
  <div>
    Offers
  </div>
)

const ProductsView = () => (
  <div>
    Products
  </div>
)

const AppView = () => (
  <Router history={browserHistory}>
    <Route path='/' component={LayoutContainer}>
        <IndexRoute component={DashboardView} />
        <Route name="Dashboard" path='dashboard' component={DashboardView}/>
        <Route name="Offers" path='offers' component={OffersView}/>
        <Route name="Products" path='products' component={ProductsView}/>
    </Route>
  </Router>
)


export default AppView;
