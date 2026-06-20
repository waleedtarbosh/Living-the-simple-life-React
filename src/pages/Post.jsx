import React from 'react';
import { useParams, Link } from 'react-router';
import posts from '../data/posts';

const Post = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="container container-flex" style={{ minHeight: '50vh', justifyContent: 'center', alignItems: 'center' }}>
        <main>
          <h2 className="article-title">Post not found</h2>
          <Link to="/" style={{ textDecoration: 'underline' }}>Go back home</Link>
        </main>
      </div>
    );
  }

  // Split body text by new lines to create paragraphs
  const paragraphs = post.body.split('\n\n');

  return (
    <div className="container container-flex">
      <main>
        <article className="article-featured">
          <h2 className="article-title">{post.title}</h2>
          <p className="article-info">{post.date} | {post.comments} comments</p>
          {/* Note: In a real app we'd need to correctly resolve paths if they are relative, but since images are in public/img, standard root-relative or relative might work depending on deployment. Let's make sure it's /img/ */}
          <img src={`/${post.image}`} alt={post.title} className="image-full" />
          
          <p><strong>{post.excerpt}</strong></p>
          
          {paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </article>
      </main>
      <aside>
        <div className="sidebar-widget">
          <h2 className="widget-title">About the Author</h2>
          <p>Hi, I'm John! I love sharing my thoughts on minimalism and simple living. Thanks for reading!</p>
        </div>
      </aside>
    </div>
  );
};

export default Post;
