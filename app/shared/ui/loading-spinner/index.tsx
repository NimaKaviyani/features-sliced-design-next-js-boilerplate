import React from 'react';
import styles from '@styles/shared/loading-spinner.module.scss'

const LoadingSpinner = () => (
  <div className={styles.container}>
    <div className={styles.spinner} />
  </div>
)

export default LoadingSpinner;
