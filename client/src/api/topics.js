import axios from 'axios'; 

const baseURL = '/api/topics/'

export const getTopics = async(id) => {
  const result = await axios.get(`${baseURL}${id}`)
  return result.data
}