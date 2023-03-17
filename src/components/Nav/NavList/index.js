import React from 'react'

const NavList = () => {
  return (
   <>
    <nav>
      <ul>
        
{/* i will replace it when we use props  */} 
        <li>
          <a className="current-page" href="index.html">
            Home
          </a>
        </li>
        <li>
          <a href="about-me.html">About me</a>
        </li>
        <li>
          <a href="recent-post.html">Recent posts</a>
        </li>
      </ul>
    </nav>
   
   
   </>
  )
}

export default NavList;