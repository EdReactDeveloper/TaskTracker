import axios from 'axios'; 

export const getUser = async() => {
  const result = await axios.get('/api/user/')
  return result.data
}