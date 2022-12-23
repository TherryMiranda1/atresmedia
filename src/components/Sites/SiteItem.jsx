import React from "react";
import styles from "./Sites.module.css";
import { useNavigate } from "react-router-dom";

function CardItem({ site }) {
  const { name, createDate, path } = site;
  const navigate = useNavigate();
  
  return (
    <section className={styles.site}>
      <h4>{name}</h4>
      <p>
        {new Date(createDate).toLocaleString("es-ES", {
          month: "long",
          year: "numeric",
        })}
      </p>
      <section className={styles.buttonsSection}>
        <button
          onClick={() => navigate(`/sites/${site._id}`)}
          className={styles.button}
        >
          Saber mas
        </button>
        <button
          className={styles.button}
        >
          <a className={styles.button} href={path} target="_blank" >
          Visitar
        </a>
        </button>
        
      </section>
    </section>
  );
}

export default CardItem;
