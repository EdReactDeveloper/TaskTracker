import React from 'react';
import { connect } from 'react-redux';
import SearchPage from '../components/Search';

const SearchPageContainer = (props) => {
  const {boards} = props
  const findTopic = (topicId) =>{
    if(boards && boards.length > 0){
      for(let board of boards){
        if(board.topics.find(item => item._id === topicId)){
          return board._id
        }
      }
    }
    return null
  }
  return <SearchPage {...props} findTopic={findTopic} /> 
}

const mapStateToProps = state => {
  return {
    items: state.search.data,
    decodedQuery: state.search.decodedQuery,
    isLoading: state.search.loading,
    boards: state.board.boards
  }
}

export default connect(mapStateToProps)(SearchPageContainer);