import axios from 'axios'; 

const baseURL = '/api/board/'
const instance = axios.create({
  headers:{ 'Content-Type': 'application/json' }
})

export const getBoards = async() => {
  const result = await axios.get(baseURL)
  return result.data
}

export const updateBoard = async(type, payload)=> {
  const body = JSON.stringify(payload);
  const result = await instance.post(`${baseURL}${type}`, body)
  return result.data
}
