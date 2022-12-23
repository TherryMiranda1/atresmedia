import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

import styles from "./SingleSite.module.css";
import { useSites } from "../../state/siteContext";
import { form } from "../../static/data";
import MultiForm from "../MultiUses/MultiForm";
import { useNavigate } from "react-router-dom";

export const SingleSite = () => {
  const [site, setSite] = useState({});
  const [formError, setFormError] = useState(null);

  const params = useParams();
  const { getSite,error, createSite } = useSites();
  const navigate = useNavigate();

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

  const handleEdit = (id) => {

    toast(
      (t) => (
        <div >
          <h4>Editar Sitio</h4>
          <MultiForm
            styles={styles}
            handleChangeText={handleChangeText}
            handleRegister={handleRegister}
            error={error}
            formError={formError}
          />
        </div>
      ),
      {
        style: {
          background: "#040504",
          borderRadius: "5px",
          padding: "5px",
        },
      }
    );
  };
  useEffect(() => {
    (async () => {
      if (params.id) {
        console.log(params.id);
        const site = await getSite(params.id);
        setSite(site);
      }
    })();
    console.log(site);
  }, [params.id]);
  return (
    <section className={styles.site}>
      <h4>{site.name}</h4>
      <p>
        {new Date(site.createDate).toLocaleString("es-ES", {
          month: "long",
          year: "numeric",
        })}
      </p>
      <p>{site.description}</p>

      <p> key: {site.key}</p>
      <section className={styles.buttonsSection}>
        <button className={styles.button} onClick={() => handleEdit(site._id)}>
          Editar
        </button>
        <a href={site.path} target="_blank" className={styles.button}>
          Visitar
        </a>
      </section>
    </section>
  );
};
