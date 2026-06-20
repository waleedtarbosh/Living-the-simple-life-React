import React from 'react'
import { Link } from 'react-router';

const index = () => {
  return (
   <>
    <Link to="/post">
      <img
        src="img/life.jpg"
        alt="simple white desk on a white wall with a
        plant on the far right side"
        className="article-image"
      />
    </Link>
   </>
  )
}

export default index