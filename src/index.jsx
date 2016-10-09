import React from 'react';
import { render } from 'react-dom';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from 'store/configureStore';

import App from 'containers/app/app';
import Home from 'containers/home/home';
import NotFound from 'containers/not-found/not-found';
const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute name="Dashboard" component={Home}/>
        <Route name="404" path="*" component={NotFound}/>
      </Route>
    </Router>
  </Provider>,
  document.querySelector('#root')
);
