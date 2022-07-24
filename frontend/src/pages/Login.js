import React, {useState} from 'react';

import AuthService from '../API/AuthService';
import MyLabel from '../components/UI/label/MyLabel';
import MyInput from '../components/UI/input/MyInput';


const Login = ({loadorders, setLoginModal}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const submitLogin = async function (e) {
        e.preventDefault()
        const response = await AuthService.login(username, password)
        setUsername('')
        setPassword('')
        if (response.status === 200) {
            setLoginModal(false)
            loadorders()

        }
    }


    const Logout = async function (e) {
        e.preventDefault()
        AuthService.logout()
        setUsername('')
        setPassword('')
        setLoginModal(false)
    }

    return (

        <div className='login-page'>
            {! localStorage.getItem('isAuth') === true
            ?
            <div>
                <MyLabel for="username">Username</MyLabel>
                <MyInput
                    onChange={e => setUsername(e.target.value)}
                    type="text"
                    name="username"
                    value={username}
                />
                <MyLabel for="password">Password</MyLabel>
                <MyInput
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                    name="password"
                    value={password}
                />
                <button onClick={submitLogin}>Login</button>
            </div>

            :<button onClick={Logout}>Logout</button>
            }

        </div>
    )
}

export default Login;
