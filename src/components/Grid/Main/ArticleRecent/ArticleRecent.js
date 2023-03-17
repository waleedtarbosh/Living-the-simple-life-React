import React from 'react';
import ArticleTitle from './ArticleTitle/index';
import ArticleBody from './ArticleBody/index';
import ArticleReadMore from './ArticleReadMore/index'
import ArticleImage from './ArticleRecentSecondary/ArticleImage/index'
import ArticleInfo from './ArticleRecentSecondary/ArticleInfo/index'
const ArticleRecent = () => {
  return (
   <>
   <article className="article-recent">
    <div className="article-recent-main">
     <ArticleTitle></ArticleTitle>
     <ArticleBody></ArticleBody>
     <ArticleReadMore></ArticleReadMore>
    </div>
    <div className="article-recent-secondary">
     <ArticleImage></ArticleImage>
     <ArticleInfo></ArticleInfo>
    </div>
  </article>


{/* i will replace it when we use props  */} 

   <article className="article-recent">
    <div className="article-recent-main">
      <h2 className="article-title">Simplicity and work</h2>
      <p className="article-body">
        Work is often a major source of stress. People get frustrated, it ruins
        their relationship with others and it leads to burnout. By keeping your
        work life as simple as possible, it will help balance everything out.
      </p>
      <a href="/" className="article-read-more">
        CONTINUE READING
      </a>
    </div>
    <div className="article-recent-secondary">
      <img src="img/work.jpg" alt="" className="article-image" />
      <p className="article-info">July 12, 2023 | 3 comments</p>
    </div>
  </article>
  <article className="article-recent">
    <div className="article-recent-main">
      <h2 className="article-title">Simple decorations</h2>
      <p className="article-body">
        A home isn't a home until you've decorated a little. People either don't
        decorate, or they go overboard and it doesn't have the impact they were
        hoping for. Staying simple will help draw the eye where you want it to
        and make things pop like never before.
      </p>
      <a href="/" className="article-read-more">
        CONTINUE READING
      </a>
    </div>
    <div className="article-recent-secondary">
      <img src="img/deco.jpg" alt="" className="article-image3" />
      <p className="article-info">July 3, 2023 | 3 comments</p>
    </div>
  </article>
  

   </>
  )
}

export default ArticleRecent