import React from 'react'
import NavListContainer from '../NavListContainer';
import SiteTitle from '../SiteTitle';
import styles from './container.module.css';
const Nav = () => {
  return (
    <header>
  <div className="container container-flex">
    <SiteTitle></SiteTitle>
    <NavListContainer></NavListContainer>
  </div>
  {/* / .container */}
</header>
  )
}

export default Nav;