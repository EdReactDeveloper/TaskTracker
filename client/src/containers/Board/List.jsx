import React, { Component } from 'react';
import List from '../../components/Boards/Topics/List'; 
import {connect} from 'react-redux'; 
import {checkListItem} from '../../store/actions/topic';

class ListContainer extends Component {

  componentDidMount(){

  }

  render() {
    const {data, checkListItem} = this.props
    return <List 
              list={data}
              checkListItem={checkListItem}
              />
  }
}

const mapStateToProps = state => {
  return {
    
  }
}

export default connect(mapStateToProps, {checkListItem})(ListContainer);