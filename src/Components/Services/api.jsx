import axios from 'axios'

const baseURL = 'https://jsonplaceholder.typicode.com/users'

const api = axios.create({
    baseURL

});

export const getUsers = () => api.get('/');
export const addUsers = (user) => api.post(`/`, user);
export const editUsers = (userId, user) => api.put(`/${userId}`, user);
export const deleteUsers = (userId) => api.delete(`/${userId}`);


export default api;
