import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from './Button';
import Menu from '@material-ui/core/Menu';

import MenuItems from '../NewDropdown/MenuItems'; 

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));



export default function CustomizedMenus(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { boardItems, topicItems, boardsItems, forElement, topic, board } = props
  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }


  return (
    <>
      <Button forElement={forElement} handleClick={handleClick} >действия</Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItems items={boardsItems} handleClose={handleClose}/>
        {board && <MenuItems items={boardItems} handleClose={handleClose}/>}
        {topic && <MenuItems items={topicItems} handleClose={handleClose}/>}
      </StyledMenu>
    </>
  );
}

