export function renderTopicMenu(removeTopic, modalHandler, topicId, modalType){
  return [
    {name: 'add item', icon:'addItem', onClick: ()=>modalHandler(modalType, topicId)},
    {name: 'delete this TOPIC', icon:'delete', onClick: ()=> removeTopic(topicId)}
  ]
}

export function renderBoardMenu(removeBoard, modalHandler, boardId, history, modalType){
  return [
    {name: 'add topic', icon:'addItem', onClick: ()=> modalHandler(modalType, boardId)},
    {name: 'delete this BOARD', icon:'delete', onClick: ()=> removeBoard(boardId, history)}
  ]
}

