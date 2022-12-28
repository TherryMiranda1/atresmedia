import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { createSite } from "../../services/sitesProvider";
import { useDispatch, useSelector } from "react-redux";

import { isValidUrl } from "../../tools/validateUrl";
import MultiForm from "../sharedViews/MultiForm";

import styles from "./NewSite.module.css";

export const NewSite = () => {
  const [formError, setFormError] = useState(null);

  const { loading, error } = useSelector((state) => state.allSites);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = async (e, site) => {
    e.preventDefault();
    if (isValidUrl(site?.path) && site.path && site.publicPath && site.name) {
      dispatch(createSite(site));
      if (error) {
        return;
      }
    } else {
      setFormError(
        "Todos los campos son requeridos, el path debe ser una url valida."
      );
      setTimeout(() => {
        setFormError(null);
      }, 3000);
    }
  };

  console.log(error);

  return (
    <div className={styles.forms}>
      <MultiForm
        styles={styles}
        handleSubmit={handleSubmit}
        formError={formError}
        title={"Crear Sitio"}
        buttonLabel={"Crear"}
      />
    </div>
  );
};
