import axios from 'axios';

const baseURL = '/api/topics';

const body = (payload) => {
	return JSON.stringify(payload)
}

const instance = axios.create({
	headers: { 'Content-Type': 'application/json' }
});

// TOPIC
export const getTopics = async (id) => {
	const result = await axios.get(`${baseURL}/${id}`);
	return result.data;
};

export const postTopic = async (payload) => {
	const result = await instance.post(`${baseURL}/`, body(payload));
	return result.data;
};

export const removeTopic = async (id) =>{
	const result = await axios.delete(`${baseURL}/${id}`)
	return result.data
}

// LIST ITEM
export const addListItem = async(payload, topicId) => {
	const result = await instance.post(`${baseURL}/list/add/${topicId}`, body(payload))
	return result.data
}

export const updateListItem = async(payload, type)=> {
	const result = await instance.post(`${baseURL}/list/${type}/${payload.topicId}`, body({payload}))
	return result.data
}

export const moveListItem = async(payload, type)=> {
	const result = await instance.post(`${baseURL}/list/${type}`, body({payload}))
	return result.data
}

