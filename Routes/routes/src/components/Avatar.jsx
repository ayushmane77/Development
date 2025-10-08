import React from 'react'
import { useParams } from 'react-router-dom'
const Avatar = () => {
    const {id} = useParams()
  return (
    <div>Avatar {id}</div>
  )
}

export default Avatar