import React, {useState, useEffect} from 'react'
import axiosWithAuth from '../login/axiosWithAuth';
import Friend from './Friend';
import FriendForm from '../friends/FriendForm';
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
             <FriendForm friends = {friends} />
        </div>
    )
}

export default FriendsList;