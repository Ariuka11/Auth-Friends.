import React from 'react'

const Friend = (props) => {

    return(
        <div>
            <h3>{props.friend.name}</h3>
            <h3>{props.friend.age}</h3>
            <h3>{props.friend.email}</h3>
        </div>
    )
}

export default Friend