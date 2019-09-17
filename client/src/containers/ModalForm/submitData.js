const submitData = ({
	edit,
	topic,
	board,
	form,
	history,
	eidtBoardTitleAction,
	addBoard,
	updateTopicAction,
	addTopicAction,
	updateListItemAction,
	addListItemAction,
	modalHandler,
	modalType,
	id
}) => {
	const {boardTitle, topicTitle, itemTitle, itemDescription} = form.values

	switch (modalType) {
		case 'topicModal':
			{
				edit 
					? updateListItemAction({itemId: id, topicId: topic._id, itemTitle, itemDescription}, 'edit')
					: addListItemAction(topic._id, itemTitle, itemDescription);
			}
			modalHandler(modalType);
			break;

		case 'boardModal':
			{
				edit ? updateTopicAction(topicTitle, topic._id) : addTopicAction(topicTitle, board._id);
			}
			modalHandler(modalType);
			break;

		case 'boardsModal':
			{
				edit ? eidtBoardTitleAction(boardTitle, board._id) : addBoard(boardTitle, history);
			}
			modalHandler(modalType);
			break;

		default:
	}
};

export default submitData;
