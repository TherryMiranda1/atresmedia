import { createSlice } from "@reduxjs/toolkit";
import { isValidUrl } from "../../tools/validateUrl";

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
    // establecer loading
    setLoading: (state, action) => {
      state.loading = action.payload;
      if (action.payload === true) {
        state.error = null;
      }
    },

    // establecer sitios en el estado
    updateSitesByGet: (state, action) => {
      state.sites = action.payload.filter((site) =>
        isValidUrl(site.publicPath)
      );

      state.draft = action.payload;
    },

    //actualizar el estado luego de añadir un sitio
    updateSitesByPost: (state, action) => {
      state.sites = [...state.sites, action.payload];
    },

    //actualizar el estado luego de editar un sitio
    updateSitesByEdit: (state, action) => {
      state.sites = state.sites.filter((site) =>
        site.id === action.payload.id ? (site = action.payload.site) : site
      );
    },

    //actualizar el estado luego de borrar un sitio
    updateSitesByDelete: (state, action) => {
      state.sites = state.sites.filter((site) => site.id !== action.payload);
    },

    //establecer los detalles de un sitio
    setSiteDetails: (state, action) => {
      state.siteDetails = action.payload;
    },

    // filtrar sitios por casa
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

    // establecer un error
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
