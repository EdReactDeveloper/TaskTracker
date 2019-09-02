import React, { Component } from 'react'
import {connect} from 'react-redux'; 
import Topic from '../../components/Boards/Topics/Topic';
import {addNewListData, addListItem} from '../../store/actions/topic'; 

class TopicContainer extends Component {

  state={
    type: {
      newListTitle: 'newListTitle',
      newListDescription: 'newListDescription'
    }
  }

  submitHandler=(e)=>{
    e.preventDefault()
    const {data, addListItem} = this.props
    const {type} = this.state
    console.log(data)
    addListItem(data._id, data[type.newListTitle], data[type.newListDescription])
  }

  render() {

    const {
      data, 
      addNewListData,
    } = this.props

    return <Topic 
    data={data} 
    submitHandler={this.submitHandler}
    addNewListData={addNewListData}
    type={this.state.type}
    />
  }
}

const mapStateToProps = state => {
  return {
    // listItemTitle: state.fields.listItemTitle,
    // listItemDescription: state.fields.listItemDescription
  }
}



export default connect(mapStateToProps, {addNewListData, addListItem})(TopicContainer);
