import React from 'react';
import Item from './Item'
import style from './search.module.scss'; 
import Button from '../misc/Elements/Button'; 

const SearchList = ({ items, decodedQuery, isLoading, history, findTopic }) => {

  return (
    <div className={style.wrapper}> 
    <div className={style.flex}>
    <Button type="navigation" onClick={()=>history.goBack()}>go back</Button>
      <h3 className={style.header}>search results for <span>{decodedQuery}</span></h3>
    </div>
      {!isLoading ?
        <ul>
          {items.length > 0 ? items.map(item => <Item item={item} key={item._id} findTopic={findTopic} />) : <li>No results</li>}
        </ul>
        : <div>Loading...</div>
      }
    </div>
  );
};

export default SearchList;