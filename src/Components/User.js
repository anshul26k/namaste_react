import React, { useState } from 'react'

function User(props) {
    const {name,location} = props
    const [count] = useState(0);
    const [count1] = useState(2);
  return (
    <div className="user-card">
        <h2>Count:{count}</h2>
        <h2>Count1:{count1}</h2>
        <p>User name: {name}</p>
        <p>Location: {location}</p>
        <p>email id: anshul26vk@gmail.com</p>
    </div>
  )
}

export default User