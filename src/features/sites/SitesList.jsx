import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getAllSites } from "../../services/sitesProvider";
import Loading from "../sharedViews/Loading";

import SiteItem from "./SiteItem";

import styles from "./Sites.module.css";

export const SitesList = () => {
  const dispatch = useDispatch();
  const { sites, error, loading } = useSelector((state) => state.allSites);

  useEffect(() => {
    dispatch(getAllSites());
  }, [dispatch]);

  if (error)
    return (
      <h3>
        No hemos podido conectar con el servidor. Por favor intentalo mas tarde
      </h3>
    );

  return (
    <section className={styles.siteList}>
      {loading ? (
        <Loading />
      ) : (
        <>
          {sites?.map((site) => {
            return <SiteItem site={site} key={site._id} />;
          })}
        </>
      )}
    </section>
  );
};
