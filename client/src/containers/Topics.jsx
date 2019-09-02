import React, { Component } from 'react';
import Topics from '../components/Boards/Topics'
import {connect} from 'react-redux'; 
import {getTopics} from '../store/actions/topic';

class TopicsContainer extends Component {

  componentDidMount(){
    const id = this.props.boardId
    this.props.getTopics(id)
  }

  render() {
    const {topics} = this.props
    return <> {topics && <Topics topics={topics} /> } </>
  }
}

const mapStateToProps = state => {
  return {
    topics: state.board.board.topics
  }
}

export default connect(mapStateToProps, {getTopics})(TopicsContainer);