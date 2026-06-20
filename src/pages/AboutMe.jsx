import React from 'react';

const AboutMe = () => {
  return (
    <div className="container container-flex">
      <main>
        <article className="article-featured">
          <h2 className="article-title">About Me</h2>
          <img src="img/about-me.jpg" alt="About Me" className="image-full" />
          <p className="article-info">Hi there! My name is John and I love exploring the minimal lifestyle.</p>
          <p>
            I started this blog to share my journey towards a simpler, more meaningful life. 
            I believe that by removing the excess, we can focus on what truly matters.
            Whether it's decluttering your home, simplifying your finances, or just finding more time to relax, 
            I hope you'll find some inspiration here.
          </p>
        </article>
      </main>
      <aside>
        <div className="sidebar-widget">
          <h2 className="widget-title">My Philosophy</h2>
          <p>Keep it simple. Less is more. Focus on experiences over things.</p>
        </div>
      </aside>
    </div>
  );
};

export default AboutMe;
