import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import QuestionsPage from '../components/Questions';

import { getQuestions } from '../actions/questions';
import selectors from '../selectors';

const mapStateToProps = state => ({
  questions: selectors.getQuestions(state),
  loading: selectors.isQuestionsLoading(state),
  search: selectors.getQuerySearch(state),
});

@connect(mapStateToProps, { getQuestions })
export default class Questions extends Component {

  handleItemClick = id => {
    browserHistory.push({ pathname: `/question/${id}` });
  }

  render() {
    return (
      <QuestionsPage
        questions={this.props.questions}
        onClick={this.handleItemClick}
      />
    );
  }
}
