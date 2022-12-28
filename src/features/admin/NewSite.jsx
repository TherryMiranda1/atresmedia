import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { createSite } from "../../services/sitesProvider";
import { useDispatch } from "react-redux";

import { isValidUrl } from "../../tools/validateUrl";
import MultiForm from "../sharedViews/MultiForm";

import styles from "./NewSite.module.css";

export const NewSite = () => {
  const [site, setSite] = useState({});
  const [formError, setFormError] = useState(null);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = async (e, site,) => {
    e.preventDefault();
    if (isValidUrl(site?.path) && site.path && site.publicPath && site.name) {
      dispatch(createSite(site));
      navigate("/");
    } else {
      setFormError(
        "Todos los campos son requeridos, el path debe ser una url valida."
      );
    }
  };

  const handleChangeText = (setter, value) => {
    setSite({ ...site, [setter]: value });
  };

  return (
    <div className={styles.forms}>
      <MultiForm
        styles={styles}
        handleSubmit={handleSubmit}
        // error={error}
        formError={formError}
        title={"Crear Sitio"}
        buttonLabel={"Crear"}
      />
    </div>
  );
};
