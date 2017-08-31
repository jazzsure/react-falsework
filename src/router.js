
import React, {Component} from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './container/app/app.js';
import Login from './container/login/index';
import Main from './container/main/index';
import configStore from './store/configStore';
import {syncHistoryWithStore} from 'react-router-redux';

const store = configStore();

const history = syncHistoryWithStore(browserHistory, store);

const routeConfig = {
  path: '/',
  component: App,
  indexRoute: {
      component: Login
  },
  childRoutes: [{
      path: '/main',
      //onEnter: redirectToLogin,
      component: require('./container/main/index').default,
      childRoutes: [
          require('./container/main/sub/router.js'),
          require('./container/home/router.js')
      ]}
  ]
};

let router = (
    <Router history={history}  routes={routeConfig}></Router>
);

export {store, router};
