import React, { useState } from "react";
import { useSites } from "../../state/siteContext";
import { form } from "../../static/data";
import { isValidUrl } from "../../tools/validateUrl";
import MultiForm from "../MultiUses/MultiForm";
import styles from "./Form.module.css";
import { useNavigate } from "react-router-dom";

export const Form = () => {
  const [site, setSite] = useState({});
  const [formError, setFormError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { error, createSite } = useSites();
  const  navigate  = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    console.log(site);
    if (isValidUrl(site?.path) && site.path && site.publicPath && site.name) {
      try {
        const res = await createSite(site);
        console.log(res);
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    } else {
      setFormError(
        "Todos los campos son requeridos, el path debe ser una url valida."
      );
    }
    setLoading(false);
  };

  const handleChangeText = (setter, value) => {
    setSite({ ...site, [setter]: value });
  };

  return (
    <div className={styles.forms}>
      <h4>Crear Sitio</h4>
      <MultiForm
        styles={styles}
        handleChangeText={handleChangeText}
        handleRegister={handleRegister}
        error={error}
        formError={formError}
      />
    </div>
  );
};
