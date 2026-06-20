import React from 'react';
import { Link } from 'react-router';

const ArticleRecent = ({ post }) => {
  if (!post) return null;

  return (
    <article className="article-recent">
      <div className="article-recent-main">
        <h2 className="article-title">
          <Link to={`/post/${post.id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
            {post.title}
          </Link>
        </h2>
        <p className="article-body">
          {post.excerpt}
        </p>
        <Link to={`/post/${post.id}`} className="article-read-more">
          CONTINUE READING
        </Link>
      </div>
      <div className="article-recent-secondary">
        <Link to={`/post/${post.id}`}>
          <img src={`/${post.image}`} alt={post.title} className="article-image" />
        </Link>
        <p className="article-info">
          {post.date} | {post.comments} comments
        </p>
      </div>
    </article>
  );
};

export default ArticleRecent;