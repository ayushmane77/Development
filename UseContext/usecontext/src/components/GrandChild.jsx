import React from 'react'
import GrandGrandChild from './GrandGrandChild'

const GrandChild = () => {
  return (
    <div>GrandChild
        <GrandGrandChild/>
    </div>
  )
}

export default GrandChild