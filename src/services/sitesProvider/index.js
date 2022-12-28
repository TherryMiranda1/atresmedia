import { allSitesReducer, } from "./sites.allSites.slice";

export * from "./sites.api";
export * from "./sites.allSites.api";
export * from "./sites.allSites.slice";

export const sitesReducers = {
  allSites: allSitesReducer,
};
