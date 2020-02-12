export const formatTitle = (title, maxLength=50) =>{
  if(title.length >= maxLength){
    const dots = '...'
    return title.slice(0, maxLength) + dots
  }
  return title
}

export const titleNoRepeat = (array, title, id) => {
  if (title.length > 0) {
    return array.filter(item => item.title === title && item._id !== id).length < 1
  }
  return true
}

