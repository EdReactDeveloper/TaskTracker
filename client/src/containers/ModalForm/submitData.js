const submitData = ({
	board,
	edit,
	modalType,
	history,
	topic,
	topicItemTitle,
	topicItemDescription,
	topicTitle,
	updateBoardAction,
	updateTopicAction,
	updateListItem,
	item,
	modalHandler,
	addTopic,
	addListItem,
	addBoard,
	boardTitle
}) => {
	switch (modalType) {
		// choose which type of data will be sent with the seleceted model form
		case 'topicModal':
			{
				edit ? updateListItem(item, 'edit') : addListItem(topic._id, topicItemTitle, topicItemDescription);
			}
			modalHandler(modalType);
			break;

		case 'boardModal':
			{
				edit ? updateTopicAction(topic.title, topic._id) : addTopic(topicTitle, board._id);
			}
			modalHandler(modalType);
			break;

		case 'boardsModal':
			{
				edit ? updateBoardAction(board.boardTitle, board._id) : addBoard(boardTitle, history);
			}
			modalHandler(modalType);
			break;

		default:
	}
};

export default submitData;
