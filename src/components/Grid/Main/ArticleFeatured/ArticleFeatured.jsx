import React from 'react';
import { Link } from 'react-router';

const ArticleFeatured = ({ post }) => {
  if (!post) return null;

  return (
    <article className="article-featured">
      <h2 className="article-title">
        <Link to={`/post/${post.id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
          {post.title}
        </Link>
      </h2>
      <Link to={`/post/${post.id}`}>
        <img
          src={`/${post.image}`}
          alt={post.title}
          className="article-image"
        />
      </Link>
      <p className="article-info">
        {post.date} | {post.comments} comments
      </p>
      <p className="article-body">
        {post.excerpt}
      </p>
      <Link to={`/post/${post.id}`} className="article-read-more">
        CONTINUE READING
      </Link>
    </article>
  );
};

export default ArticleFeatured;