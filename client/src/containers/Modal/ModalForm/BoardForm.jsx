import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../../../components/Modal/Froms/BoardForm/Form';
import { FORM_TYPE } from '../../../components/misc/configs';
import { updateTopicAction, addTopicAction } from '../../../store/actions/board';

class BoardForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      msg: ''
    }
  }

  componentDidMount() {
    const { topic, modalForm: { itemId } } = this.props
    if (itemId) {
      this.setState({ title: topic.title })
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    const { modalForm: { formType, parentId, itemId }, updateTopicAction, addTopicAction, modalHandler, board, history } = this.props
    const { title } = this.state
    const repeating = board.topics.filter(item => item.title === title).length > 0
    if (!repeating) {
      switch (formType) {
        case FORM_TYPE.add: addTopicAction(title, parentId, history); break;
        case FORM_TYPE.edit: updateTopicAction(title, itemId); break;
        default: break;
      }
      modalHandler()
    } else {
      this.setState({ msg: 'this title already exists' })
    }
  }

  renderForm = () => {
    const { modalForm: { formType } } = this.props
    if (formType === FORM_TYPE.add || formType === FORM_TYPE.edit) {
      return <Form {...this.state} onChange={this.onChangeHandler} handleSubmit={this.handleSubmit} />
    }
    return null
  }

  onChangeHandler = e => this.setState({ [e.target.name]: e.target.value, msg: '' })

  render() {
    return this.renderForm()
  }
};

const mapStateToProps = state => {
  return {
    modalForm: state.modal.form,
    board: state.board.board
  }
}

export default connect(mapStateToProps, { updateTopicAction, addTopicAction })(BoardForm);