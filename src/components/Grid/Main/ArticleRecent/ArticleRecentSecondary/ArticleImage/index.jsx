import React from 'react'
import { Link } from 'react-router';

const index = () => {
  return (
    <Link to="/post">
      <img src="img/food.jpg" alt="" className="article-image" />
    </Link>
  )
}

export default index