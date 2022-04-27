import {
  batteries,
  core,
  laser,
  solarPanels,
  storage,
  utility
} from "./modulesModel";

const gameModel = {
  supply: [
    solarPanels,
    solarPanels,
    solarPanels,
    solarPanels,
    storage,
    batteries,
    storage,
    utility,
    laser
  ].map((module, moduleIndex) => ({
    ...module,
    key: module.key + "-" + moduleIndex
  })),
  energy: 0,
  scrap: 0,
  maxEnergyCapacity: 0,
  maxScrapCapacity: 0,
  actions: 0,
  grid: [
    [undefined, undefined, undefined],
    [undefined, { module: core }, undefined],
    [undefined, undefined, undefined]
  ]
};

const asteroidModel = {};

export default gameModel;
