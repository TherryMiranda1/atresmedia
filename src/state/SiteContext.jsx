import { useState, createContext, useContext, useEffect } from "react";
import {
  getSitesRequests,
  createSiteRequest,
  deleteSiteRequest,
  getSiteRequest,
  updateSiteRequest,
} from "../api/sitesApi";
import { isRegexUrl, isValidUrl } from "../tools/validateUrl";

const siteContext = createContext();

export const useSites = () => {
  const context = useContext(siteContext);
  return context;
};

export const SiteContainer = ({ children }) => {
  const [sites, setSites] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("");

  // solicitar sitios
  const getSites = async () => {
    setLoading(true);
    try {
      const res = await getSitesRequests();

      console.log(res);
      const filterNoUrl = await res?.filter((site) =>
        isValidUrl(site.publicPath)
      );
      console.log(filterNoUrl);
      setSites(filterNoUrl);
    } catch (error) {
      setError("Parece que no hemos podido conectar con el servidor");
    }
    setLoading(false);
  };

  //  crear sitios
  const createSite = async (site, token) => {
    setLoading(true);
    try {
      const res = await createSiteRequest(site);
      if (res.data) setSites([...sites, res.data]);
      if (res.error)
        setError(
          "No se ha podido crear el sitio, por favor comprueba que no estes introduciendo datos duplicados"
        );
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  // borrar sitios
  const deleteSite = async (id) => {
    setLoading(true);
    try {
      const res = await deleteSiteRequest(id);
      if (res.status === 204) {
        setSites(sites.filter((site) => site.id !== id));
      }
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  // obtener un unico sitio
  const getSite = async (id) => {
    setLoading(true);
    try {
      const res = await getSiteRequest(id);
      return res.data;
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  // actualizar sitios
  const updateSite = async (id, site) => {
    setLoading(true);
    try {
      const res = await updateSiteRequest(id, site);
      setSites(
        sites.filter((site) => (site.id === id ? (site = res.data) : site))
      );
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  return (
    <siteContext.Provider
      value={{
        error,
        loading,
        sites,
        getSites,
        createSite,
        deleteSite,
        getSite,
        updateSite,
        filter,
        setFilter,
      }}
    >
      {children}
    </siteContext.Provider>
  );
};
