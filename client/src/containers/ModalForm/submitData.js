const submitData = ({
	board,
	edit,
	modalType,
	history,
	topic,
	topicItemTitle,
	topicItemDescription,
	topicTitle,
	eidtBoardTitleAction,
	updateTopicAction,
	updateListItemAction,
	item,
	modalHandler,
	addTopicAction,
	addListItemAction,
	addBoard,
	boardTitle
}) => {
	switch (modalType) {
		// choose which type of data will be sent with the seleceted model form
		case 'topicModal':
			{
				edit ? updateListItemAction(item, 'edit') : addListItemAction(topic._id, topicItemTitle, topicItemDescription);
			}
			modalHandler(modalType);
			break;

		case 'boardModal':
			{
				edit ? updateTopicAction(topic.title, topic._id) : addTopicAction(topicTitle, board._id);
			}
			modalHandler(modalType);
			break;

		case 'boardsModal':
			{
				edit ? eidtBoardTitleAction(board.boardTitle, board._id) : addBoard(boardTitle, history);
			}
			modalHandler(modalType);
			break;

		default:
	}
};

export default submitData;
