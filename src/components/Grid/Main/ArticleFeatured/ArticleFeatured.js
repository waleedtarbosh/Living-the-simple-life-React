import React from 'react'
import ArticleTitle from './ArticleTitle/index';
import ArticleImg from './ArticleImg/index';
import ArticleInfo from './ArticleInfo/index';
import ArticleBody from './ArticleBody/index';
import ArticleReadMore from './ArticleReadMore/index'
const ArticleFeatured = () => {
  return (
   
    <>
    <article className="article-featured">
   <ArticleTitle></ArticleTitle>
   <ArticleImg></ArticleImg>
   <ArticleInfo></ArticleInfo>
    <ArticleBody></ArticleBody>
    <ArticleReadMore></ArticleReadMore>
  </article>
  
    </>
  )
}

export default ArticleFeatured