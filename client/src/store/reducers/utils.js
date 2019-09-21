export const changeProps = (array, board, topic) => {
	const boards = [ ...array ];
  const boardIndex = boards.findIndex((i) => i._id === board._id);
	const boardTitle = board.title;
	boards[boardIndex] = { ...boards[boardIndex], title: boardTitle };
	if (topic) {
		const topicIndex = boards[boardIndex].topics.findIndex((k) => k._id === topic._id);
		if (topicIndex < 0) {
			boards[boardIndex].topics = [ topic, ...boards[boardIndex].topics ];
		} else {
			boards[boardIndex].topics[topicIndex] = { ...topic };
		}
	}
	return { boards, board: boards[boardIndex] };
};

export const setActive = (item, id) => {
	for (let key of item) {
		if (key._id === id) {
			key.active = true;
		} else {
			key.active = false;
		}
	}
	return item;
};

export const findItem = function(where, id){
  const index = where.findIndex(i=> i._id === id)
  return where[index]
}

export const findAndRemoveItem = function(where, id){
  const array = [...where]
  const index = array.findIndex(i=> i._id === id)
  array.splice(index, 1)
  return array
}
