import React from 'react'
import {useRouteError} from 'react-router-dom'

const Error = () => {
    const temp = useRouteError();
    console.log(temp)
  return (
    <div>
        <h1>Ooops...Something went wrong</h1>
        <h2>{temp.status} {temp.statusText}</h2>
    </div>
  )
}

export default Error