import React from "react";
import clsx from "clsx";

import styles from "./Module.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faPowerOff,
  faRotate
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as faEmptyHeart } from "@fortawesome/free-regular-svg-icons";

// export type ComponentProps = React.PropsWithChildren<{ className?: string }>;

const defaultConnectors = [true, true, true, true];

const connectorLabels = ["top", "right", "bottom", "left"];

export default function Module({
  className = "",
  label = "",
  damage = 0,
  energyUse = 0,
  scrapCost = 2,
  scrapValue = 1,
  fireDirection = null,
  canRotate = false,
  canActivate = false,
  connectors = defaultConnectors,
  maxHitPoints = 1,
  hitPoints = 1
}) {
  return (
    <div className={clsx(styles.base, className)}>
      {label !== "" && <div className={styles.label}>{label}</div>}
      {damage !== 0 && <div className={styles.damage}>damage: {damage}</div>}
      {energyUse !== 0 && (
        <div className={styles.energyUse}>energyUse: {energyUse}</div>
      )}
      {fireDirection !== null && (
        <div className={styles.fireDirection}>
          fireDirection: {fireDirection}
        </div>
      )}
      {canRotate !== false && (
        <div className={styles.canRotate}>
          <FontAwesomeIcon icon={faRotate} />
        </div>
      )}
      {canActivate !== false && (
        <div className={styles.canActivate}>
          canActivate: <FontAwesomeIcon icon={faPowerOff} />
        </div>
      )}
      {connectors !== defaultConnectors && (
        <div className={styles.connectors}>
          connectors:{" "}
          {connectorLabels.filter((_, index) => connectors[index]).join(", ")}
        </div>
      )}
      {maxHitPoints !== 1 && (
        <div className={styles.hitPoints}>
          {Array(maxHitPoints)
            .fill(null)
            .map((_, index) => (
              <FontAwesomeIcon
                icon={index + 1 <= hitPoints ? faHeart : faEmptyHeart}
              />
            ))}
        </div>
      )}
    </div>
  );
}
