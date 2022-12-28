import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

import { isValidUrl } from "../../tools/validateUrl";
import MultiForm from "../sharedViews/MultiForm";
import { useNavigate } from "react-router-dom";

import { updateSite, getSite } from "../../services/sitesProvider";
import { useDispatch, useSelector } from "react-redux";

import styles from "./SingleSite.module.css";
import Loading from "../sharedViews/Loading";

export const SingleSite = () => {
  const [formError, setFormError] = useState(null);
  const { siteDetails, loading } = useSelector((state) => state.allSites);

  const params = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = async (e, site, id, t) => {
    e.preventDefault();

    console.log(site);
    if (isValidUrl(site?.path) && site.path && site.publicPath && site.name) {
      try {
        dispatch(updateSite(id, site));
        navigate("/");
        toast.dismiss(t.id);
      } catch (error) {
        console.log(error);
      }
    } else {
      setFormError(
        "Todos los campos son requeridos, el path debe ser una url valida."
      );
    }
  };

  const handleEdit = (site) => {
    toast(
      (t) => (
        <div className={styles.formContainer}>
          <button
            onClick={() => toast.dismiss(t.id)}
            className={styles.formCall}
          >
            <h3>← Volver</h3>
          </button>
          <MultiForm
            styles={styles}
            handleSubmit={handleSubmit}
            formError={formError}
            site={site}
            title={"Editar Sitio"}
            buttonLabel={"Actualizar"}
            t={t}
          />
        </div>
      ),
      {
        duration: 600000,
        style: { backgroundColor: "#040504", marginTop: 100 },
      }
    );
  };

  useEffect(() => {
    (async () => {
      if (params.id) {
        dispatch(getSite(params.id));
      }
    })();
  }, [dispatch]);
  return (<>{
    loading?<Loading/>:<section className={styles.site}>
    <h4>{siteDetails.name}</h4>
    <p>
      {new Date(siteDetails.createDate).toLocaleString("es-ES", {
        month: "long",
        year: "numeric",
      })}
    </p>
    <p>{siteDetails.description}</p>

    <p> key: {siteDetails.key}</p>
    <section className={styles.buttonsSection}>
      <button
        className={styles.button}
        onClick={() => handleEdit(siteDetails)}
      >
        Editar
      </button>
      <a href={siteDetails.path} target="_blank" className={styles.button}>
        Visitar
      </a>
    </section>
  </section>
  }</>
    
  );
};
