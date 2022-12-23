import axios from "axios";

export const sitesUrl = "https://interview.staging.atresplayer.com/";

// Peticiones para obtener
export const getSitesRequests = async () => {
  const res = await fetch(sitesUrl + "sites/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await res.json();
};

// Peticiones para crear
export const createSiteRequest = async (newSite) => {
  const res = await fetch(sitesUrl + "site/", {
    method: "POST",
    body: JSON.stringify(newSite),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return res.json();
};

// Peticiones para eliminar
export const deleteSiteRequest = async (id) =>
  await axios.delete(sitesUrl + "site/" + id, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

// Peticiones para actualizar
export const updateSiteRequest = async (id, newFields) =>
  await axios.put(sitesUrl + "site/" + id, newFields, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

// Peticiones para obtener un solo elemento
export const getSiteRequest = async (id) =>
  await axios.get(sitesUrl + "site/" + id);
