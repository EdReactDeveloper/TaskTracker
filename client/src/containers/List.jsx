import React, { Component } from 'react';
import List from '../components/Boards/Topics/List'; 
import {connect} from 'react-redux'; 

class ListContainer extends Component {

  componentDidMount(){

  }

  render() {
    const {data} = this.props
    console.log(data)
    return <List list={data}/>
  }
}

const mapStateToProps = state => {
  return {
    
  }
}

export default connect(mapStateToProps)(ListContainer);