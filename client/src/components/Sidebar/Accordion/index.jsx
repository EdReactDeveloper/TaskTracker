import React, { Component } from "react";
import BoardsList from './BoardsList'; 
import TopicsList from './List/TopicsList'; 

class Accordion extends Component {

  render() {   
    return (
    <BoardsList topicsList={TopicsList} {...this.props}/>    
    );
  }
}

export default Accordion;
