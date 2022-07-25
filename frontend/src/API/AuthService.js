import api from ".";
import axios from "axios";


export default class AuthService {
    static async login(username, password) {
        try {
            const response = await api.post('token/', {username, password})
            localStorage.setItem('token', response.data.access);
            localStorage.setItem('refresh-token', response.data.refresh);
            localStorage.setItem('username', username)
            localStorage.setItem('isAuth', true)
            return response
        }catch (e) {
            alert(e.response.data.detail);
            return e
        }
    }

    static async logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('refresh-token');
        localStorage.removeItem('username');
        localStorage.removeItem('isAuth')

    }

    static async checkAuth() {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/token/refresh/', {refresh: localStorage.getItem('refresh-token')})
            localStorage.setItem('token', response.data.access);
            localStorage.setItem('isAuth', true)
            localStorage.setItem('username', response.data.user)
        } catch (e) {
            console.log(e.response?.data?.message);
            return e
        }
    }
}


