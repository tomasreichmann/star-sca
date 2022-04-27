import React from "react";
import clsx from "clsx";

import styles from "./Grid.module.css";
import Module from "./Module";

// export type ComponentProps = React.PropsWithChildren<{ className?: string }>;

const EmptyCell = () => <div className={styles.emptyCell}></div>;

export default function Grid({ className = "", grid = [] }) {
  return (
    <div className={clsx(styles.base, className)}>
      {grid.map((row, rowIndex) => {
        return (
          <div key={rowIndex} className={styles.row}>
            {row.map(({ module } = {}, cellIndex) => {
              return (
                <div key={cellIndex}>
                  {module ? <Module {...module} /> : <EmptyCell />}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
