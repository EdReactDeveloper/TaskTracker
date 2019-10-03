import React from 'react';
import Button from '../misc/Elements/Button';

const NoBoard = ({ boards }) => {
  return <>
    {boards && boards.length < 1 ?
      <Button type='add' payload={{ modalType: 'boardsModal' }}>
        create a board
      </Button>
      :
      <h4>select a board from the list</h4>
    }
  </>
};

export default NoBoard;