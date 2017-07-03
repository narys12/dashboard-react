import React from 'react';
import LayoutView from '../LayoutView'
import DashboardView from '../ContentView/DashboardView'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'

const AppView = () => (
  <Router history={browserHistory}>
    <Route path='/' component={LayoutView}>
        <IndexRoute component={DashboardView} />
        <Route path='dashboard' component={DashboardView}/>
    </Route>
  </Router>
)


export default AppView;
