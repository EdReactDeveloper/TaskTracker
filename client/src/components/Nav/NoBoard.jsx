import React from 'react';
import Button from '../misc/Button/Button';

const NoBoard = ({ boards, modalHandler }) => {
  return <>
    {boards && boards.length < 1 ?
      <Button type='addBoard' payload={{ modalHandler }}>
        create a board
      </Button>
      :
      <h4>select a board from the list</h4>
    }
  </>
};

export default NoBoard;