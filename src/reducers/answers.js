import {
  FETCH_ANSWERS_REQUEST,
  FETCH_ANSWERS_SUCCESS,
  FETCH_ANSWERS_FAILURE,
} from '../actions/answers';

const initialState = {
  isFetching: false,
  items: [],
};

const answersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ANSWERS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_ANSWERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: action.items,
      };
    case FETCH_ANSWERS_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default answersReducer;
