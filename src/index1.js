import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import HttpsRedirect from 'react-https-redirect'

export const history = createHistory();

import App from './App';

//  app and admin routes
ReactDOM.render(
  <div>
    <Router history={history}>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </div>,
  document.getElementById('root')
);
