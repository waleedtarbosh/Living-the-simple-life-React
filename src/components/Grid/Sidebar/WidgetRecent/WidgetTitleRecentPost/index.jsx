import React from 'react'
import { Link } from 'react-router';

const index = () => {
  return (
    <h3 className="widget-recent-post-title">
      <Link to="/post" style={{ color: 'inherit', textDecoration: 'none' }}>Keeping cooking simple</Link>
    </h3>
  )
}

export default index