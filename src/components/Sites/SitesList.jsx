import { getDefaultNormalizer } from "@testing-library/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSites } from "../../state/siteContext";
import SiteItem from "./SiteItem";
import styles from "./Sites.module.css";

export function SitesList() {
  const { filter, sites } = useSites();
  const [filteredSites, setFilteredSites] = useState(null);

  const filterSites = () => {
    if (filter) {
      const result = sites?.filter((site) => site?.path?.includes(filter));
      setFilteredSites(result);
    } else {
      setFilteredSites(sites);
    }
  };
  useEffect(() => {
    filterSites();
  }, [filter]);
  return (
    <>
      {filter ? (
        <section className={styles.siteList}>
          {filteredSites?.map((site) => {
            return <SiteItem site={site} key={site._id} />;
          })}
        </section>
      ) : (
        <section className={styles.siteList}>
          {sites?.map((site) => {
            return <SiteItem site={site} key={site._id} />;
          })}
        </section>
      )}
    </>
  );
}
