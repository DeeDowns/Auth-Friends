import React, { useState, useEffect }from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import FriendCard from './FriendCard'
import FriendForm from './FriendForm'
import { Spinner, Card } from 'reactstrap'
import '../styles/FriendsList.css' 

const initialFriendsList = []

const FriendsList = () => {
    const [friends, setFriends] = useState(initialFriendsList)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const getFriendsData = () => {
        setIsLoading(true)
        axiosWithAuth().get('/api/friends')
        .then(res => {
            console.log(res)
           setFriends(res.data)
           setIsLoading(false)
        })
        .catch(err => {
            console.log(err)
            setIsLoading(false)
            setError(err.message)
        })
    }

    useEffect(() => {
        getFriendsData()
    }, [])

    console.log(friends)



    return (
        <div className='friends-container'>
            <h1 className='friends-title'>hi fren <span>👋</span></h1>
            <FriendForm setFriends={setFriends} friends={friends}/>
            {isLoading ? <h3>Loading Friends...  <Spinner color="warning" /></h3> : null}
            {error ? <p>and I opp... {error}</p> : null}
            <div className='card-container'> 
                {friends.map(friend => (
                    
                        <Card>
                            <FriendCard key={friend.id} friend={friend} />
                        </Card>
                
                ))}
             </div>

        </div>
    )
}

export default FriendsList