export function renderTopicMenu(removeTopic, modalHandler, id, modalType){
  return [
    {name: 'add item', icon:'addItem', onClick: ()=>modalHandler(modalType)},
    {name: 'delete this TOPIC', icon:'delete', onClick: ()=> removeTopic(id)}
  ]
}

export function renderBoardMenu(removeBoard, modalHandler, boardId, history, modalType){
  return [
    {name: 'add topic', icon:'addItem', onClick: ()=> modalHandler(modalType)},
    {name: 'delete this BOARD', icon:'delete', onClick: ()=> removeBoard(boardId, history)}
  ]
}

