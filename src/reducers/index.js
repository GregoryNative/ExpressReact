import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import answers from './answers';
import session from './session';
import questions from './questions';

export default combineReducers({
  answers,
  session,
  questions,
  routing: routerReducer
});
