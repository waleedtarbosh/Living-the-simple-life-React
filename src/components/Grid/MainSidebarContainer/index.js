import React from 'react'
import Main from '../Main/main';
import Sidebar from '../Sidebar';
import "./MainSidebarContainer.css";
const Grid = () => {
  return (
   <>
    <div class="container container-flex">
        <Main></Main>
        <Sidebar></Sidebar>
    </div>
   </>
  );
}

export default Grid;