import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getAllSites } from "../../services/sitesProvider";
import Loading from "../sharedViews/Loading";
import { decorateSite } from "../../tools/decorateSite";

import SiteItem from "./SiteItem";

import styles from "./Sites.module.css";

export const SitesList = () => {
  const dispatch = useDispatch();
  const { sites, error, loading } = useSelector((state) => state.allSites);

  useEffect(() => {
    dispatch(getAllSites());
  }, [dispatch]);

  if (!sites)
    return (
      <h3>
        Parece que aun no hay sitios registrados
      </h3>
    );
    console.log(decorateSite(sites))

  return (
    <section className={styles.siteList}>
      {loading ? (
        <Loading />
      ) : (
        <>
          {decorateSite(sites)?.map((site) => {
            return <SiteItem site={site} key={site._id} />;
          })}
        </>
      )}
    </section>
  );
};
