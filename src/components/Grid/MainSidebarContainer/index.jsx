import React from 'react'
import Main from '../Main/main';
import Sidebar from '../Sidebar';
import styles from './MainSidebarContainer.module.css';
const Grid = () => {
  return (
   <>
    <div className="container container-flex">
        <Main></Main>
        <Sidebar></Sidebar>
    </div>
   </>
  );
}

export default Grid;