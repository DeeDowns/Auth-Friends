import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { Form, Button, FormGroup, Label, Input } from 'reactstrap'
import '../styles/FriendForm.css'

const initialInputValues = {
    name: '',
    age: '',
    email: '',
    id: new Date()
}

const FriendForm = (props) => {
    const {setFriends, friends} = props
    console.log(friends)
    const [inputValue, setInputValue] = useState(initialInputValues)
   

    const handleChange = event => {
        setInputValue({
            ...inputValue,
            [event.target.name]: event.target.value
        })
    }

    const addFriend = (newFriend) => {
        axiosWithAuth().post('/api/friends', newFriend)
        .then(res => {
            console.log(res)
            setFriends(res.data)
            setInputValue(initialInputValues)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const submit = event => {
        event.preventDefault()
        const newFriend = {
            name: inputValue.name,
            age: inputValue.age,
            email: inputValue.email
        }
        addFriend(newFriend) 
    }

    return (
        <Form onSubmit={submit}>
             <FormGroup>
                <Label for='name'>Name</Label>
                <Input 
                    type='text'
                    name='name'
                    id='name'
                    value={inputValue.name}
                    onChange={handleChange}
                />
            </FormGroup>

            <FormGroup>
                <Label for='age'>Age
                <Input 
                    type='text'
                    name='age'
                    id='age'
                    value={inputValue.age}
                    onChange={handleChange}
                />
                </Label>
            </FormGroup>

            <FormGroup>
                <Label for='email'>email
                <Input 
                    type='email'
                    name='email'
                    id='email'
                    value={inputValue.email}
                    onChange={handleChange}
                />
                </Label>
            </FormGroup>

            <Button color="warning">Add Friend</Button>
        </Form>
    )
}

export default FriendForm