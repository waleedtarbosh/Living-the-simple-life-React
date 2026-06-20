import React from 'react';
import styles from './main.module.css';
import ArticleFeatured from './ArticleFeatured/ArticleFeatured';
import ArticleRecent from './ArticleRecent/ArticleRecent';
import posts from '../../../data/posts';

const Main = () => {
  // Use the first post as the featured one
  const featuredPost = posts[0];
  // Use the next three posts as recent ones
  const recentPosts = posts.slice(1, 4);

  return (
    <main role="main">
      <ArticleFeatured post={featuredPost} />
      {recentPosts.map(post => (
        <ArticleRecent key={post.id} post={post} />
      ))}
    </main>
  );
};

export default Main;