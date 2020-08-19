import React from 'react'
import { CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import '../styles/FriendCard.css' 


const FriendCard = (props) => {
    const { friend } = props

    return (
        <div>
            <CardBody>
                <CardTitle>{friend.name}</CardTitle>
                <CardSubtitle>Age: {friend.age}</CardSubtitle>
                <CardText>Email: {friend.email}</CardText>
            </CardBody>
        </div>
    )
}

export default FriendCard