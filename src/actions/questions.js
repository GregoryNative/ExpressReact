import api from '../api';

export const FETCH_QUESTIONS_REQUEST = 'FETCH_QUESTIONS_REQUEST';
export const FETCH_QUESTIONS_SUCCESS = 'FETCH_QUESTIONS_SUCCESS';
export const FETCH_QUESTIONS_FAILURE = 'FETCH_QUESTIONS_FAILURE';

import selectors from '../selectors';

export const getQuestions = query => (dispatch, getState) => {
  dispatch({
    type: FETCH_QUESTIONS_REQUEST,
    query
  });
  const location = selectors.getLocation(getState());
  const isLoggedIn = selectors.isLoggedIn(getState());

  if (isLoggedIn) {
    return api.getQuestions(location)
      .then(data =>
        dispatch({
          items: data.data,
          type: FETCH_QUESTIONS_SUCCESS
        })
      ).catch(dispatch(error()));
  }
};

export const addQuestion = title => (dispatch, getState) => {
  const username = selectors.getUsername(getState());

  return api.addQuestion({ username, title })
    .then(() => dispatch(getQuestions()))
    .catch(dispatch(error()));
}

const error = () => ({ type: FETCH_QUESTIONS_FAILURE });
