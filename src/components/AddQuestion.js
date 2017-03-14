import React, { Component, PropTypes } from 'react'
import { Input, Button, Header, Icon, Modal } from 'semantic-ui-react'

class AddQuestionModal extends Component {
  state = { input: '' };
  onChangeInput = e => this.setState({ input: e.target.value });

  post = () => {
    const { input } = this.state;
    if (input !== '') {
      this.props.onSubmit(input);
      this.props.onClose();
      this.setState({ input: '' });
    }
  }

  render() {
    const { isOpen, onClose } = this.props;
    const { input } = this.state;

    return (
      <Modal open={isOpen}>
        <Header icon="comment" content="Add new question" />
        <Modal.Content>
          <Input fluid error={!input} value={input} onChange={this.onChangeInput} />
        </Modal.Content>
        <Modal.Actions>
          <Button color="red" onClick={onClose}>
            <Icon name="remove" /> Cancel
          </Button>
          <Button color="green" onClick={this.post}>
            <Icon name="checkmark" /> Submit
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

AddQuestionModal.propTypes = {
  onSubmit: PropTypes.func,
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
  input: PropTypes.string,
};

export default AddQuestionModal;
