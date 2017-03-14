import React, { Component } from 'react';
import { connect } from 'react-redux';

import AnswersPage from '../components/Answers';

import { getAnswers, addAnswer } from '../actions/answers';
import selectors from '../selectors';

const mapStateToProps = (state) => ({
  answers: selectors.getAnswers(state),
  isLoading: selectors.isAnswersLoading(state),
  search: selectors.getQuerySearch(state),
});

@connect(mapStateToProps, { getAnswers, addAnswer })
export default class Answers extends Component {
  state = {
    input: '',
  }

  componentDidMount() {
    this.props.getAnswers(this.props.params.id);
  }

  onChangeInput = e => {
    this.setInput(e.target.value);
  }

  onClick = () => {
    this.props.addAnswer(this.props.params.id, this.state.input);
    this.setInput();
  }

  setInput = (value = '') => this.setState({ input: value });

  render() {
    console.log('isLoading', this.props.isLoading)
    return (
      <AnswersPage
        answers={this.props.answers}
        isLoading={!this.props.isLoading}
        input={this.state.input}
        onChangeInput={this.onChangeInput}
        onClick={this.onClick}
      />
    );
  }
}
