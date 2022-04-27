import React from "react";
import clsx from "clsx";

import styles from "./Header.module.css";

// export type ComponentProps = React.PropsWithChildren<{ className?: string }>;

export default function Header({ className = "", children }) {
  return (
    <div className={clsx(styles.base, className)}>
      <h1 className={styles.title}>Star Scavengers</h1>
    </div>
  );
}
