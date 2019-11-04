import React from 'react'
import FriendForm from '../friends/FriendForm';
import FriendsList from '../friends/FriendsList';

const ProtectedPage = () => {
    return(
        <div>
            <h1>My Friends</h1>
            <FriendsList />
            <FriendForm />
        </div>
    )
}

export default ProtectedPage