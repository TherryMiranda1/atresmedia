import { configureStore } from "@reduxjs/toolkit";
import { sitesReducers } from "../services/sitesProvider";

export const store = configureStore({
  reducer: {
    ...sitesReducers,
  },
});
