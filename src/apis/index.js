import axios from 'axios';

// All API
const API = axios.create({baseURL: 'https://hn.algolia.com/api/v1'});

export const searchResults = (queryData) => API.get(`/search?query=${queryData}`);
export const searchPostData = (id) => API.get(`/items/${id}`);