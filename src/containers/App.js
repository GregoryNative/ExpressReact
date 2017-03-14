import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Menu, Segment, Input, Dimmer, Loader } from 'semantic-ui-react'
import { browserHistory } from 'react-router';

import AddQuestionModal from '../components/AddQuestion';
import { getQuestions, addQuestion } from '../actions/questions';
import { setUsername, logout } from '../actions/session';

import selectors from '../selectors';

import './App.less';

@connect(state => ({
  locationQuery: selectors.getQuery(state),
  isLoggedIn: selectors.isLoggedIn(state),
  name: selectors.getUsername(state),
}), { getQuestions, setUsername, logout, addQuestion })
export default class App extends Component {
  state = { activeItem: 'home', username: '' }
  componentDidMount() {
    this.props.getQuestions();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isLoggedIn) {
      this.props.getQuestions();
    }
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });

    switch (name) {
      case 'All': browserHistory.push({ pathname: '/question' }); break;
      case 'Answered': browserHistory.push({ pathname: '/question', query: { filter: 'answered' } }); break;
      case 'Not answered': browserHistory.push({ pathname: '/question', query: { filter: 'not_answered' } }); break;
    }
  }

  handleLogin = () => {
    this.props.setUsername(this.state.username);
  }

  handleLogout = () => {
    this.setState({ username: '' });
    this.props.logout();
  }

  render() {
    const { activeItem, username, showModal } = this.state;
    const { locationQuery, name, isLoggedIn, addQuestion } = this.props;

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item name='All' active={!locationQuery.filter} onClick={this.handleItemClick} />
          <Menu.Item name='Answered' active={locationQuery.filter === 'answered'} onClick={this.handleItemClick} />
          <Menu.Item name='Not answered' active={locationQuery.filter === 'not_answered'} onClick={this.handleItemClick} />
          {
            isLoggedIn &&
            <Menu.Item name='Add' active={activeItem === 'add'} onClick={() => this.setState({ showModal: true })} />
          }
          <Menu.Menu position='right'>
            {
              isLoggedIn
              ?
                [
                  <span style={{ alignSelf: 'center' }}><b>{`Hello, ${name}!`}</b></span>,
                  <Menu.Item name='logout' onClick={this.handleLogout} />
                ]
              :
                  [<Input value={username} onChange={e => this.setState({ username: e.target.value })} />,
                  <Menu.Item name='login' onClick={this.handleLogin} />]
            }
          </Menu.Menu>
        </Menu>
        <div className="children">
          { this.props.children }
        </div>
        <AddQuestionModal isOpen={showModal} onClose={() => this.setState({ showModal: false })} onSubmit={value => addQuestion(value)} />
      </div>
    );
  }
}

