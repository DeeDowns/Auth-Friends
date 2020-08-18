import React, { useState } from 'react'

const initialCredentials = {
    username: '',
    password: ''
}

const Login = () => {
    const [credentials, setCredentials] = useState(initialCredentials)
    console.log(credentials)

   const handleChange = event => {
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value
        })
    }

    return (
        <form>
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