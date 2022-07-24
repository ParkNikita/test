import axios from 'axios';

export const API_URL = 'http://127.0.0.1:8000/api/'

const api = axios.create({
    baseURL: API_URL
})

let token = localStorage.getItem('token')
if (token == null) {
    api.interceptors.request.use( (config) => {
        config.headers.Authorization = ''
        return config;
    })
}else {
    api.interceptors.request.use( (config) => {
        config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
        return config;
    })
}

export default api;