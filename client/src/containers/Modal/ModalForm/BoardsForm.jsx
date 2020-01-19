import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../../../components/Modal/Froms/BoardsForm/Form';
import { FORM_TYPE } from '../../../components/misc/configs';
import { eidtBoardTitleAction, addBoard } from '../../../store/actions/board';

class BoardsForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: ''
    }
  }

  componentDidMount() {
    const { modalForm: { itemId }, board } = this.props
    if (itemId && board) {
      this.setState({ title: board.title })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { modalForm: { formType, itemId }, eidtBoardTitleAction, addBoard, modalHandler, history } = this.props
    const { title } = this.state
    if(title.length > 0){
    switch (formType) {
      case FORM_TYPE.add: addBoard(title, history); break;
      case FORM_TYPE.edit: eidtBoardTitleAction(title, itemId); break;
      default: break;
    }
    modalHandler()
  }
  }

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  renderForm = () => {
    const { modalForm: { formType } } = this.props
    if (formType === FORM_TYPE.add || formType === FORM_TYPE.edit) {
      return <Form {...this.state} onChange={this.onChangeHandler} handleSubmit={this.handleSubmit} />
    }
    return null
  }

  render() {
    return this.renderForm()
  }
};

const mapStateToProps = state => {
  return {
    modalForm: state.modal.form,
    board: state.board.board,
  }
}

export default connect(mapStateToProps, { eidtBoardTitleAction, addBoard })(BoardsForm);