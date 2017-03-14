import api from '../api';

export const FETCH_ANSWERS_REQUEST = 'FETCH_ANSWERS_REQUEST';
export const FETCH_ANSWERS_SUCCESS = 'FETCH_ANSWERS_SUCCESS';
export const FETCH_ANSWERS_FAILURE = 'FETCH_ANSWERS_FAILURE';

import selectors from '../selectors';

export const getAnswers = id => (dispatch, getState) => {
  dispatch({
    type: FETCH_ANSWERS_REQUEST,
  });

  return api.getAnswers(id)
    .then(data =>
      dispatch({
        items: data.data,
        type: FETCH_ANSWERS_SUCCESS,
      })
    ).catch(dispatch(error()));
}


export const addAnswer = (id, text) => (dispatch, getState) => {
  dispatch({
    type: FETCH_ANSWERS_REQUEST,
  });

  const username = selectors.getUsername(getState());
  const params = {
    id,
    text,
    username,
  };

  return api.addAnswer(params)
    .then(data => dispatch(getAnswers(params.id)))
    .catch(dispatch(error()));
}

const error = () => ({ type: FETCH_ANSWERS_FAILURE });