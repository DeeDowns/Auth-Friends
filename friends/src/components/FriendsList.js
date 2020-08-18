import React, { useState, useEffect }from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import FriendCard from './FriendCard'

const initialFriendsList = []

const FriendsList = () => {
    const [friends, setFriends] = useState(initialFriendsList)

    const getFriendsData = () => {
        axiosWithAuth().get('/api/friends')
        .then(res => {
            console.log(res)
           setFriends(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        getFriendsData()
    }, [])

    console.log(friends)



    return (
        <div>
            <p>hi fren</p>
            {friends.map(friend => (
                <FriendCard key={friend.id} friend={friend} />
                // console.log(friend.name)
            ))}

        </div>
    )
}

export default FriendsList