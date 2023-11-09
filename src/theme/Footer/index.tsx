import React from "react";
import { useHistory } from "@docusaurus/router";
import { mediumArr, financeUrl } from './contants';
import styles from './index.module.css';

const Footer = () => {
  const history = useHistory();

  return <div className={styles['portkey-footer']}>
    <div className={styles['footer-logo']} onClick={() => history.push('/docs/category/overview-of-portkey')}><img src="/img/portkey-logo-light.png" alt="portkey"/></div> 
    <div className={styles['footer-container']}>
       <div className={styles['medium-wrapper']}>
        <div className={styles.medium}>
          {mediumArr.map(item => <a key={item.title} href={item.href} target="_blank" rel="noopener noreferrer"><img src={item.icon} alt={item.title} /></a>)}
        </div>
        <div className={styles.finance} >
          <span className={styles['finance-text']}>Portkey.finance</span>
          <a href={financeUrl} target="_blank" rel="noopener noreferrer"><img src="/img/footer/fingerprint.svg" alt="fingerprint" /></a>
        </div>
       </div>
    </div>
    <div className={styles['footer-copyright']}>Portkey@2023</div>
  </div>
}

export default Footer