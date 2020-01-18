import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchBar from '../components/HeaderFooter/Header/SearchBar'; 
import { getSearchAction } from '../store/actions/search';

class SearchBarContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
  }

  componentDidMount(){
    const {routing: {location: {search}}, getSearchAction} = this.props
    if(search.length > 0){
      const input = search.replace('?query=', '')
      getSearchAction(input)
    }
  }

  inputHanler = (e) => {
    this.setState({ input: e.target.value })
  }

  submitHanlder = (e) => {
    e.preventDefault()
    const { input } = this.state
    const { getSearchAction, routing: {history} } = this.props
    if (input.length > 0) {
      getSearchAction(input)
    }
    history.push(`/search?query=${input}`)
  }

  render() {
    const {input} = this.state
    return <SearchBar changeHandler={this.inputHanler} submit={this.submitHanlder} input={input}/>
  }
}

export default connect(null, { getSearchAction })(SearchBarContainer);