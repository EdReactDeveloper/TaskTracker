import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../../../components/Modal/Froms/BoardsForm/Form';
import { FORM_TYPE } from '../../../components/misc/configs';
import { eidtBoardTitleAction, addBoard } from '../../../store/actions/board';

class BoardsForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      msg: '',
      inputRef: React.createRef()
    }
  }

  componentDidMount() {
    const { modalForm: { itemId }, board } = this.props
    if (itemId && board) {
      this.setState({ title: board.title })
    }
    this.state.inputRef.current.focus()
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { modalForm: { formType, itemId }, eidtBoardTitleAction, addBoard, modalHandler, history, boards } = this.props
    const { title } = this.state
    const repeating = boards.filter(item => item.title === title) > 0
    if (!repeating) {
      switch (formType) {
        case FORM_TYPE.add: addBoard(title, history); break;
        case FORM_TYPE.edit: eidtBoardTitleAction(title, itemId); break;
        default: break;
      }
      modalHandler()
    } else {
      this.setState({ msg: 'this title already exists' })
    }

  }

  onChangeHandler = (e) => this.setState({ [e.target.name]: e.target.value, msg: '' })

  renderForm = () => {
    const { modalForm: { formType } } = this.props
    console.log(this.props)
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
    boards: state.board.boards
  }
}

export default connect(mapStateToProps, { eidtBoardTitleAction, addBoard })(BoardsForm);