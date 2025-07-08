import React from 'react';
import styles from '../../../styles/Loader.module.css';

export default function Loader() {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.spinner}></div>
      <p>Loading Car Blog...</p>
    </div>
  );
}
