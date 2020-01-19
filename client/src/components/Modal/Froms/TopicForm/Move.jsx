import React, { Component } from 'react';
import style from '../Forms.module.scss';


class Move extends Component {
  constructor(props){
    super(props)
    this.state={
      
    }
    this.input = React.createRef()
  }

  componentDidMount(){

  }

  render() {
    return (
      <>
        <label htmlFor="itemTitle" className={style.heading}>
          move
        
        </label>
      </>
    );
  }
};

export default Move;