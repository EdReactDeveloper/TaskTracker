
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
