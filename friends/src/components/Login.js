import React, { useState} from 'react'
import { useHistory } from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth'

import { Form, Button, FormGroup, Label, Input, FormText } from 'reactstrap'
import '../styles/Login.css'

const initialCredentials = {
    username: '',
    password: ''
}




const Login = (props) => {
    const [credentials, setCredentials] = useState(initialCredentials)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
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
                history.push('/friends')

            })
            .catch(err => {
                console.log(err)
                setIsLoading(false)
                setError(err.message)
            })

    }

    return (
        <Form onSubmit={login}>
            <FormGroup>
                {isLoading ? <p>Loading...</p> : null}
                {error ? <p>{error}</p> : null}
                <Label for='username'>Username</Label>
                    <Input 
                        type='text'
                        name='username'
                        id='username'
                        value={credentials.username}
                        onChange={handleChange}
                    />
           </FormGroup>
            <FormGroup>
                <Label>Password</Label>
                    <Input 
                        type='password'
                        name='password'
                        id='password'
                        value={credentials.password}
                        onChange={handleChange}
                    />
            </FormGroup>
            
            <Button color="warning">Login</Button>
        </Form>
    )
}

export default Login