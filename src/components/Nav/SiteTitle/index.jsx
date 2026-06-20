import React from 'react'
import H1 from '../SiteTitleHeading/index';
import P1 from '../SiteTitleParagraph/index';
import styles from './title.module.css';
const SiteTitle = () => {
  return (
    <>
    <div className={styles['site-title']}>
      <H1></H1>
      <P1></P1>
  </div>
  </>
  )
}

export default SiteTitle;