import React from 'react'
import {Link} from "gatsby"

export default function NavBar() {
  return (
    <nav>
      <h1>web warrior</h1>
      <div className="links">
         <Link to="/">Home</Link>
         <Link to="/about">About</Link>
         <Link to="/Projects">Portfolio Projects</Link>
      </div>
    </nav>
  )
}
