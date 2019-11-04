import React, {useState, useEffect} from 'react'
import axiosWithAuth from '../login/axiosWithAuth';
import Friend from './Friend';

const FriendsList = () => {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        axiosWithAuth().get('/friends')
            .then(res => {
                console.log(res)
                setFriends(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            {friends.map(friend => {
               return <Friend key = {friend.id} friend = {friend}/>
            })}
        </div>
    )
}

export default FriendsList;