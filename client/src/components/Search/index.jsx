import React from 'react';
import List from './List'; 
import Loader from '../misc/Loader/Lines'; 
import style from './search.module.scss'; 

const Search = ({findTopic, boards, isLoading, ...props}) => {
  return boards && !isLoading ? <List {...props} findTopic={findTopic}/> : <Loader className={style.loader}/>
};

export default Search;