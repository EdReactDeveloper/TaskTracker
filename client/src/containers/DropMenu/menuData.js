import {FORM_PAGE, FORM_TYPE} from '../../components/misc/configs'; 

export function renderTopicMenu(removeTopicAction, modalHandler, topicId) {
	return [
		{ name: 'add item', icon: 'addItem', onClick: () => modalHandler({formPage: FORM_PAGE.topic, formType: FORM_TYPE.add, parentId: topicId}) },
		{ name: 'delete this TOPIC', icon: 'delete', onClick: () => removeTopicAction(topicId) }
	];
}

export function renderBoardMenu(removeBoardAction, modalHandler, board, history) {
	return [
		{ name: 'add topic', icon: 'addItem', onClick: () => modalHandler({formPage: FORM_PAGE.board, formType: FORM_TYPE.add, parentId: board._id}) },
		{ name: 'delete this BOARD', icon: 'delete', onClick: () => removeBoardAction(board, history) }
	];
}

export function renderBoardSMenu(modalHandler) {
	return [ { name: 'add board', icon: 'addItem', onClick: () => modalHandler({formPage: FORM_PAGE.boards, formType: FORM_TYPE.add,}) } ];
}
