import React from 'react'
import { Link } from 'react-router';

const index = () => {
  return (
    <>
     <h2 className="article-title">
       <Link to="/post" style={{ color: 'inherit', textDecoration: 'none' }}>Finding simplicity in life</Link>
     </h2>
    </>
  )
}

export default index