import axios from 'axios'; 

const baseURL = '/api/board/'
const instance = axios.create({
  headers:{ 'Content-Type': 'application/json' }
})

export const getBoards = async() => {
  const result = await axios.get(baseURL)
  return result.data
}

export const postBoard = async(payload)=> {
  const body = JSON.stringify(payload);
  const result = await instance.post(baseURL, body)
  return result.data
}

export const removeBoard = async(id) => {
  const result = await axios.delete(`${baseURL}/remove/${id}`)
  return result.data
}