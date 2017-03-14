import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import Routes from './routes';

import configureStore from './store';
import { setUsername } from './actions/session';
import { extractSession } from './utils/session';

import './index.css';

const store = configureStore({}, browserHistory);
const history = syncHistoryWithStore(browserHistory, store);

const renderApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Routes history={history} />
    </Provider>,
    document.getElementById('root'),
  );
};

const startApp = () => {
  const username = extractSession();

  if (username) {
    store.dispatch(setUsername(username));
    renderApp();
  } else {
    renderApp();
  }
}

startApp();
