import React from 'react'
import "./sidebar.css";
import WidgetTitle from './WidgetTitle/index'
import WidgetImage from './WidgetImage/index'
import WidgetBody from './WidgetBody/index'
import WidgetTitleRecent from './WidgetRecent/WidgetTitleRecent/index'
import WidgetTitleRecentPost from './WidgetRecent/WidgetTitleRecentPost/index'
import WidgetImageRecent from './WidgetRecent/WidgetImageRecent/index'
const Sidebar = () => {
  return (
   <>
   <aside className="sidebar">
  <div className="sidebar-widget">
   <WidgetTitle></WidgetTitle>
   <WidgetImage></WidgetImage>
    <WidgetBody></WidgetBody>
  </div>
  <div className="sidebar-widget">
  <WidgetTitleRecent></WidgetTitleRecent>
    <div className="widget-recent-post">
     <WidgetTitleRecentPost></WidgetTitleRecentPost>
     <WidgetImageRecent></WidgetImageRecent>
    </div>

    {/* i will replace it when we use  props  */} 

    <div className="widget-recent-post">
      <h3 className="widget-recent-post-title">Simplicity and work</h3>
      <img src="img/work.jpg" alt="" className="widget-image" />
    </div>
    <div className="widget-recent-post">
      <h3 className="widget-recent-post-title">Simple decorations</h3>
      <img src="img/deco.jpg" alt="" className="widget-image" />
    </div>
  </div>
</aside>

   
   </>
  )
}

export default Sidebar;