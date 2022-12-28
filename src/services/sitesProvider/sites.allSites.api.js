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
  console.log(response);

  dispatch(updateSitesByGet(response));
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
  console.log(response);

  dispatch(updateSitesByPost(response));
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
  console.log(response);

  dispatch(updateSitesByEdit({ site: response, id }));
};

export const getSite = (id) => async (dispatch) => {
  dispatch(setLoading(true));
  const response = await doApiCall({
    url: sitesUrl + "site/" + id,
    method: "GET",
    dispatch,
  });
  console.log(response);

  dispatch(setSiteDetails(response));
};

export const deleteSite = (id) => async (dispatch) => {
  dispatch(setLoading(true));
  const response = await doApiCall({
    url: sitesUrl + "site/" + id,
    method: "DELETE",
    dispatch,
  });
  console.log(response);

  dispatch(updateSitesByDelete(id));
};
