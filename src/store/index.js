import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

export default function configureStore(initialState = {}, history) {
  const middlewares = applyMiddleware(
    thunk,
    routerMiddleware(history),
  );

  return createStore(
    rootReducer,
    initialState,
    compose(middlewares),
  );
}
