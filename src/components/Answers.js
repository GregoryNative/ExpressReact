import React, { PropTypes } from 'react';
import { Button, Comment, Form, Header } from 'semantic-ui-react';

import { when } from '../utils/time';

const Answers = ({ answers, onClick, input, onChangeInput, isLoading }) => (
  <Comment.Group size="large">
    <Header as='h3' dividing>Comments</Header>
    {
      answers.map(answer => (
        <Comment key={ answer.id }>
          <Comment.Content>
            <Comment.Author as='a'>{ answer.username }</Comment.Author>
            <Comment.Metadata>
              <div>{ when(answer.createdAt) }</div>
            </Comment.Metadata>
            <Comment.Text>{ answer.text }</Comment.Text>
          </Comment.Content>
        </Comment>
      ))
    }
    <Form.TextArea value={input} onChange={onChangeInput} autoHeight />
    <Button
      content="Add Answer"
      labelPosition="right"
      icon="comment"
      primary
      onClick={onClick}
      loading={!isLoading}
    />
  </Comment.Group>
);

Answers.propTypes = {
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      username: PropTypes.string,
      createdAt: PropTypes.string,
      text: PropTypes.string,
    }),
  ),
  onClick: PropTypes.func,
  onChangeInput: PropTypes.func,
  input: PropTypes.string,
  isLoading: PropTypes.bool,
};

export default Answers;
