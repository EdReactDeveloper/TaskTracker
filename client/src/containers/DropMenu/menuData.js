export function renderTopicMenu(removeTopicAction, modalHandler, topicId) {
	return [
		{ name: 'add item', icon: 'addItem', onClick: () => modalHandler('topicModal') },
		{ name: 'delete this TOPIC', icon: 'delete', onClick: () => removeTopicAction(topicId) }
	];
}

export function renderBoardMenu(removeBoardAction, modalHandler, boardId, history) {
	return [
		{ name: 'add topic', icon: 'addItem', onClick: () => modalHandler('boardModal') },
		{ name: 'delete this BOARD', icon: 'delete', onClick: () => removeBoardAction(boardId, history) }
	];
}

export function renderBoardSMenu(modalHandler) {
	return [ { name: 'add board', icon: 'addItem', onClick: () => modalHandler('boardsModal') } ];
}
