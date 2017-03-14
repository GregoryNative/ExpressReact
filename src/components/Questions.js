import React, { PropTypes } from 'react';
import { Item, Label } from 'semantic-ui-react';

import { format } from '../utils/time';

const Questions = ({ questions, onClick }) => (
  <Item.Group divided>
    {
      questions.map(q => (
        <Item key={ q.id }>
          <Item.Content>
            <Item.Header as='a' onClick={() => onClick(q.id)}>{ q.username }</Item.Header>
            <Item.Meta>
              <span className='cinema'>{ format(q.createdAt) }</span>
            </Item.Meta>
            <Item.Description>{ q.title }</Item.Description>
            <Item.Extra>
              <Label icon='comment' content={ q.countAnswers } />
            </Item.Extra>
          </Item.Content>
        </Item>
      ))
    }
  </Item.Group>
)

Questions.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      username: PropTypes.string,
      createdAt: PropTypes.string,
      title: PropTypes.string,
      countAnswers: PropTypes.number,
    }),
  ),
  onClick: PropTypes.func,
};

export default Questions;
