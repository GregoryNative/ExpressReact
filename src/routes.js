import React from 'react';
import { Router, Route, IndexRoute } from 'react-router'

import App from './containers/App';
import QuestionsPage from './containers/Questions';
import AnswersPage from './containers/Answers';
import NotFound from './components/NotFound';

import LoggedInLayout from './components/LoggedInLayout';
import requireLogin from './hoc/requireLogin';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRoute component={QuestionsPage} />
      <Route component={requireLogin(LoggedInLayout)}>
        <Route path="/question" component={QuestionsPage} />
        <Route path="/question/:id" component={AnswersPage} />
      </Route>
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default Routes;
