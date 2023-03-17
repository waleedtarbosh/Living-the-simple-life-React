import React from 'react';
import "./main.css";
import ArticleFeatured from './ArticleFeatured/ArticleFeatured';
import ArticleRecent from './ArticleRecent/ArticleRecent';
const Main = () => {
  return (
    <>
    <main role="main">
  <ArticleFeatured></ArticleFeatured>
  <ArticleRecent></ArticleRecent>
</main>

    </>
  )
}

export default Main;