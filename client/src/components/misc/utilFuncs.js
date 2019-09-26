export const formatTitle = function(title, maxLength=50){
  if(title.length >= maxLength){
    return title.slice(0, maxLength)+'...'
  }
  return title
}