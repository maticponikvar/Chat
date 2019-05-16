import React from 'react'
import {NavLink} from "react-router-dom"

export default function SignedInLinks() {
  return (
    <div>
      <li><NavLink to= "/">Home</NavLink></li>
        <li><NavLink to= "/addpost">Add Post</NavLink></li>
        <li><NavLink to='/signout'>Sign out</NavLink></li>
    </div>
  )
}
