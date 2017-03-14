// questions
const getQuestions = state => state.questions.items;
const isQuestionsLoading = state => state.questions.isFetching;

// answers
const getAnswers = state => state.answers.items;
const isAnswersLoading = state => state.answers.isFetching;

// session
const isLoggedIn = state => state.session.username !== '';
const getUsername = state => state.session.username;

// routing
const getQuerySearch = state => state.routing.locationBeforeTransitions.query.search;
const getQuery = state => state.routing.locationBeforeTransitions.query;
const getLocation = state => state.routing.locationBeforeTransitions.search;

export default {
  getQuestions, isQuestionsLoading,
  getAnswers, isAnswersLoading,
  isLoggedIn, getUsername,
  getQuerySearch, getQuery, getLocation,
};
