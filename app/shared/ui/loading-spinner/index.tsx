import React, { ReactElement } from "react";
import styles from "@styles/shared/loading-spinner.module.scss";

const LoadingSpinner = (): ReactElement => (
  <div className={styles.container}>
    <div className={styles.spinner} />
  </div>
);

export default LoadingSpinner;
