export function renderTopicMenu(removeTopic, modalHandler, topicId) {
	return [
		{ name: 'add item', icon: 'addItem', onClick: () => modalHandler('topicModal') },
		{ name: 'delete this TOPIC', icon: 'delete', onClick: () => removeTopic(topicId) }
	];
}

export function renderBoardMenu(removeBoard, modalHandler, boardId, history) {
	return [
		{ name: 'add topic', icon: 'addItem', onClick: () => modalHandler('boardModal') },
		{ name: 'delete this BOARD', icon: 'delete', onClick: () => removeBoard(boardId, history) }
	];
}

export function renderBoardSMenu(modalHandler) {
	return [ { name: 'add board', icon: 'addItem', onClick: () => modalHandler('boardsModal') } ];
}
