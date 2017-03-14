import {
  FETCH_QUESTIONS_REQUEST,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_FAILURE,
} from '../actions/questions';

const initialState = {
  isFetching: false,
  items: [],
};

const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_QUESTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: action.items,
      };
    case FETCH_QUESTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default questionsReducer;
