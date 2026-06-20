import React from 'react'
import { Link } from 'react-router';

const NavList = () => {
  return (
   <>
    <nav>
      <ul>
        <li>
          <Link className="current-page" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about-me">About me</Link>
        </li>
        <li>
          <Link to="/recent-posts">Recent posts</Link>
        </li>
      </ul>
    </nav>
   </>
  )
}

export default NavList;