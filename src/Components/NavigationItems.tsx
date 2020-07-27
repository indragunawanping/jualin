import React from 'react';
import styles from "./NavigationItems.module.css";
import { NavLink } from "react-router-dom";

const NavigationItems = () => {
  return (
    <ul className={styles.NavigationItems}>
      <li className={styles.NavigationItem}>
        <NavLink to='/jualin'>Dashboard</NavLink>
      </li>
      <li className={styles.NavigationItem}>
        <NavLink to='/jualin'>Dashboard</NavLink>
      </li>
      <li className={styles.NavigationItem}>
        <NavLink to='/jualin'>Dashboard</NavLink>
      </li>
    </ul>
  )
};

export default NavigationItems;
