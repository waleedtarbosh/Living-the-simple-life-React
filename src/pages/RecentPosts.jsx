import React from 'react';
import { Link } from 'react-router';
import ArticleRecent from '../components/Grid/Main/ArticleRecent/ArticleRecent';
import posts from '../data/posts';

const RecentPosts = () => {
  return (
    <div className="container container-flex">
      <main>
        <h2 className="article-title" style={{ marginBottom: '1em' }}>Recent Posts</h2>
        {posts.map(post => (
          <ArticleRecent key={post.id} post={post} />
        ))}
      </main>
      <aside>
        <div className="sidebar-widget">
          <h2 className="widget-title">Categories</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5em' }}><Link to="/">Minimalism</Link></li>
            <li style={{ marginBottom: '0.5em' }}><Link to="/">Lifestyle</Link></li>
            <li style={{ marginBottom: '0.5em' }}><Link to="/">Productivity</Link></li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default RecentPosts;
