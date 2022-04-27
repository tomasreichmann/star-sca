import React from "react";
import clsx from "clsx";

import styles from "./Game.module.css";
import ModuleSupply from "./ModuleSupply";
import gameModel from "../model/gameModel";
import Grid from "./Grid";

// export type ComponentProps = React.PropsWithChildren<{ className?: string }>;

export default function Game({ className = "" }) {
  const supply = gameModel.supply;
  const grid = gameModel.grid;
  return (
    <div className={clsx(styles.base, className)}>
      <Grid grid={grid} className={styles.grid} />
      <ModuleSupply supply={supply} className={styles.supply} />
    </div>
  );
}
