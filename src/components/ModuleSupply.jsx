import React from "react";
import clsx from "clsx";

import styles from "./ModuleSupply.module.css";
import Module from "./Module";

// export type ComponentProps = React.PropsWithChildren<{ className?: string }>;

export default function ModuleSupply({ className = "", supply = [] }) {
  return (
    <div className={clsx(styles.base, className)}>
      {supply.map((module) => (
        <Module {...module} />
      ))}
    </div>
  );
}
