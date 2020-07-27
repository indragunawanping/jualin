import React from 'react';
import NavigationItems from "./NavigationItems";
import styles from './Toolbar.module.css';
import logoTextJualin  from '../assets/logo-text-jualin.webp';

const Toolbar = () => {
  return (
   <header className={styles.NavigationBar}>
     <div className={styles.Logo} onClick={()=>{}}>
       <img src={logoTextJualin} alt="alt-ping-logo"/>
     </div>

     <nav className={styles.DesktopOnly}>
       <NavigationItems/>
     </nav>
   </header>
  )
};

export default Toolbar;
