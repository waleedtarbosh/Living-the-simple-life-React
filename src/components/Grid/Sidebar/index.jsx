import React from 'react'
import { Link } from 'react-router';
import styles from './sidebar.module.css';
import WidgetTitle from './WidgetTitle/index'
import WidgetImage from './WidgetImage/index'
import WidgetBody from './WidgetBody/index'
import WidgetTitleRecent from './WidgetRecent/WidgetTitleRecent/index'
import posts from '../../../data/posts';

const Sidebar = () => {
  // Use the last 3 posts for the sidebar widget
  const sidebarPosts = posts.slice(-3);

  return (
    <>
      <aside className={styles['sidebar']}>
        <div className={styles['sidebar-widget']}>
          <WidgetTitle></WidgetTitle>
          <WidgetImage></WidgetImage>
          <WidgetBody></WidgetBody>
        </div>
        <div className={styles['sidebar-widget']}>
          <WidgetTitleRecent></WidgetTitleRecent>
          
          {sidebarPosts.map(post => (
            <div key={post.id} className={styles['widget-recent-post']}>
              <h3 className={styles['widget-recent-post-title']}>
                <Link to={`/post/${post.id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                  {post.title}
                </Link>
              </h3>
              <Link to={`/post/${post.id}`}>
                <img src={`/${post.image}`} alt={post.title} className={styles['widget-image']} />
              </Link>
            </div>
          ))}
          
        </div>
      </aside>
    </>
  )
}

export default Sidebar;