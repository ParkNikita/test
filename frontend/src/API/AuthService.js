import api from ".";

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
}


