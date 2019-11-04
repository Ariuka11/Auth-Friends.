import React from 'react'

import FriendsList from '../friends/FriendsList';

const ProtectedPage = () => {
    return(
        <div>
            <h1>My Friends</h1>
            <FriendsList />
        </div>
    )
}

export default ProtectedPage