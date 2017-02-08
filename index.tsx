import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import createRoutes from './routes';
import createStore from './configureStore';

const { store } = createStore();
const routes = createRoutes();
const node = document.getElementById('root');
const history = browserHistory;

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  node
);
