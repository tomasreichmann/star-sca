export const core = {
  key: "core",
  label: "Core",
  actionGeneration: 1,
  energyGeneration: 1,
  energyCapacity: 5,
  scrapGeneration: 3,
  scrapCapacity: 5,
  thrust: 4,
  maxHitPoints: 3,
  hitPoints: 1
};

export const solarPanels = {
  key: "solarPanels",
  label: "Solar Panels",
  energyGeneration: 1,
  canRotate: true,
  rotation: 0,
  connectors: [false, true, false, true],
  maxHitPoints: 1,
  hitPoints: 1
};

export const batteries = {
  key: "batteries",
  label: "Batteries",
  energyCapacity: 5,
  maxHitPoints: 2,
  hitPoints: 2
};

export const storage = {
  key: "storage",
  label: "Storage",
  scrapCapacity: 5,
  maxHitPoints: 2,
  hitPoints: 2
};

export const utility = {
  key: "utility",
  label: "Utility",
  thrust: 3,
  energyConsumptionOnThrust: 1,
  maxHitPoints: 2,
  hitPoints: 2
};

export const laser = {
  key: "laser",
  label: "Laser",
  damage: 5,
  energyUse: 1,
  fireDirection: "top",
  canRotate: true,
  rotation: 0,
  canActivate: 1,
  connectors: [false, true, true, true],
  maxHitPoints: 1,
  hitPoints: 1
};

export default {
  core,
  solarPanels,
  batteries,
  storage,
  utility,
  laser
};
