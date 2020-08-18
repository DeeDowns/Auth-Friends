import React from 'react'

const FriendCard = (props) => {
    // console.log(props)
    const { friend } = props

    return (
        <div>
            <h3>{friend.name}</h3>
            <h4>Age: {friend.age}</h4>
            <h4>Email: {friend.email}</h4>
        </div>
    )
}

export default FriendCard