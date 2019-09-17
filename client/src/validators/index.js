export const required = value => {
  if(value) return undefined
  return 'Field is required'
}

export const maxLengthCreator = (maxLength) => (value)=>{
  if(value&& value.length > maxLength) return `max length is ${maxLength}  chars`
  return undefined 
}

export const minLengthCreator = (minLength) => (value)=>{
  if(value && value.length < minLength) return `min length is ${minLength} chars`
}

export const isEmail = (value)=>{
  const regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const result = regexp.test(value)
  if(result) return undefined
  return 'should be a valid email'
}
