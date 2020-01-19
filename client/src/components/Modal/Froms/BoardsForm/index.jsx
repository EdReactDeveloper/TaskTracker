import React, { Component } from 'react';
import {connect} from 'react-redux'; 
import style from '../Forms.module.scss';
import Add from './Add';
import Edit from './Edit';
import {FORM_TYPE} from '../../../misc/configs'; 
import {eidtBoardTitleAction, addBoard} from '../../../../store/actions/board'; 

class BoardsForm extends Component {
  constructor(props){
    super(props)
    this.state={
      title: ''
    }
  }

  componentDidMount(){
    const {modalForm: {itemId}, board} = this.props
    if(itemId && board){
      this.setState({title: board.title})
    }
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    const {modalForm: {formType, itemId}, eidtBoardTitleAction, addBoard, modalHandler, history} = this.props
    const {title} = this.state
    switch (formType) {
      case FORM_TYPE.add: addBoard(title, history);break;
      case FORM_TYPE.edit: eidtBoardTitleAction(title, itemId);break;
      default: break;
    }
    modalHandler()
  }

  onChangeHandler = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    const {modalForm: {formType}} = this.props
    let form = null
    switch (formType) {
      case FORM_TYPE.add: form = <Add {...this.state} onChange={this.onChangeHandler} />;break; 
      case FORM_TYPE.edit: form = <Edit {...this.state} onChange={this.onChangeHandler}/>;break;
      default:
        break;
    }
    return (
      <form className={style.form} onSubmit={this.handleSubmit}>
      <label className={style.heading}>
        board name
        {form}        
        <button type="submit" className={style.submit}>add board</button>
      </label>
    </form>
  );
}
};

const mapStateToProps = state=>{
  return {
    modalForm: state.modal.form,
    board: state.board.board,
  }
}

export default connect(mapStateToProps, {eidtBoardTitleAction, addBoard})(BoardsForm);