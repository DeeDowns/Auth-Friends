import React, { useState} from 'react'
import { useHistory } from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const initialCredentials = {
    username: '',
    password: ''
}



// 'i<3Lambd4'
const Login = () => {
    const [credentials, setCredentials] = useState(initialCredentials)
    const [isLoading, setIsLoading] = useState(false)
    console.log(credentials)

    let history = useHistory()

   const handleChange = event => {
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value
        })
    }

    const login = event => {
        event.preventDefault()
        //getting token from server
        setIsLoading(true)
        axiosWithAuth().post('/api/login', credentials)
            .then(res => {
                console.log(res)
                localStorage.setItem('token', res.data.payload)
                setIsLoading(false)
                history.pushState('/friends')

            })
            .catch(err => {
                console.log(err)
                // setIsLoading(false)
            })

    }

    return (
        <form onSubmit={login}>
            {isLoading ? <p>Loading...</p> : null}
            <label>Username
                <input 
                    type='text'
                    name='username'
                    id='username'
                    value={credentials.username}
                    onChange={handleChange}
                />
            </label>

            <label>password
                <input 
                    type='password'
                    name='password'
                    id='password'
                    value={credentials.password}
                    onChange={handleChange}
                />
            </label>
            <button>Login</button>
        </form>
    )
}

export default Login