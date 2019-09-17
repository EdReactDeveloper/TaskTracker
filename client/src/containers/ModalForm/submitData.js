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
	const title = form.values.title;
	const description = form.values.description;

	switch (modalType) {
		case 'topicModal':
			{
				edit 
					? updateListItemAction({itemId: id, topicId: topic._id, title, description}, 'edit')
					: addListItemAction(topic._id, title, description);
			}
			modalHandler(modalType);
			break;

		case 'boardModal':
			{
				edit ? updateTopicAction(title, topic._id) : addTopicAction(title, board._id);
			}
			modalHandler(modalType);
			break;

		case 'boardsModal':
			{
				edit ? eidtBoardTitleAction(title, board._id) : addBoard(title, history);
			}
			modalHandler(modalType);
			break;

		default:
	}
};

export default submitData;
