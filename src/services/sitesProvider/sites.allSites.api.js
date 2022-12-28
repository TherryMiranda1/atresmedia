import { doApiCall } from "./sites.api";
import {
  updateSitesByGet,
  updateSitesByPost,
  updateSitesByEdit,
  updateSitesByDelete,
  setSiteDetails,
  setError,
  setLoading,
} from "./sites.allSites.slice";

export const sitesUrl = "https://interview.staging.atresplayer.com/";

//Obtener todos los sitios
export const getAllSites = () => async (dispatch) => {
  dispatch(setLoading(true));
  const response = await doApiCall({
    url: sitesUrl + "sites",
    method: "GET",
    dispatch,
  });

  if (response) dispatch(updateSitesByGet(response));

  dispatch(setLoading(false));
};

//Crear un nuevo sitio
export const createSite = (newSite) => async (dispatch) => {
  dispatch(setLoading(true));
  const response = await doApiCall({
    url: sitesUrl + "site/",
    method: "POST",
    body: JSON.stringify(newSite),
    dispatch,
  });

  if (response) dispatch(updateSitesByPost(response));

  dispatch(setLoading(false));
};

//Editar un sitio
export const updateSite = (id, newSite) => async (dispatch) => {
  dispatch(setLoading(true));
  const response = await doApiCall({
    url: sitesUrl + "site/" + id,
    method: "PUT",
    body: JSON.stringify(newSite),
    dispatch,
  });

  if (response) dispatch(updateSitesByEdit({ site: response, id }));

  dispatch(setLoading(false));
};

export const getSite = (id) => async (dispatch) => {
  dispatch(setLoading(true));
  const response = await doApiCall({
    url: sitesUrl + "site/" + id,
    method: "GET",
    dispatch,
  });

  if (response) dispatch(setSiteDetails(response));

  dispatch(setLoading(false));
};

export const deleteSite = (id) => async (dispatch) => {
  dispatch(setLoading(true));
  const response = await doApiCall({
    url: sitesUrl + "site/" + id,
    method: "DELETE",
    dispatch,
  });

  if (response) dispatch(updateSitesByDelete(id));

  dispatch(setLoading(false));
};
