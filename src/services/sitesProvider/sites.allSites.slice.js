import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sites: [],
  draft: [],
  siteDetails: {},
  filter: "",
  error: null,
  loading: false,
};

export const allSitesSlice = createSlice({
  name: "allSites",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    updateSitesByGet: (state, action) => {
      state.sites = action.payload;
      state.draft = action.payload;
      state.loading = false;
    },
    updateSitesByPost: (state, action) => {
      state.sites = [...state.sites, action.payload];
      state.loading = false;
    },
    updateSitesByEdit: (state, action) => {
      state.sites = state.sites.filter((site) =>
        site.id === action.payload.id ? (site = action.payload.site) : site
      );
      state.loading = false;
    },
    updateSitesByDelete: (state, action) => {
      state.sites = state.sites.filter((site) => site.id !== action.payload);
      state.loading = false;
    },
    setSiteDetails: (state, action) => {
      state.siteDetails = action.payload;
      state.loading = false;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
      if (state.filter.length) {
        state.sites = state.draft.filter((site) =>
          site?.path?.includes(action.payload)
        );
      } else {
        state.sites = state.draft;
      }
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setLoading,
  updateSitesByGet,
  updateSitesByPost,
  updateSitesByEdit,
  updateSitesByDelete,
  setSiteDetails,
  setFilter,
  setError,
} = allSitesSlice.actions;

export const allSitesReducer = allSitesSlice.reducer;
