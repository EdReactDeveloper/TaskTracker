
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

export const findItem = function(array, id){
  const index = array.findIndex(i=> i._id === id)
  return array[index]
}

export const findAndRemoveItem = function(array, id){
  const index = array.findIndex(i=> i._id === id)
  array.splice(index, 1)
  return array
}
