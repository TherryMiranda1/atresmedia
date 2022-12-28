import React from "react";
import { useState } from "react";
import { form } from "../../static/data";
import DotLoader from "react-spinners/DotLoader";
import { useSelector } from "react-redux";

const MultiForm = ({
  styles,
  handleSubmit,
  formError,
  site: prevSite,
  title,
  buttonLabel,
  t,
}) => {
  const [site, setSite] = useState(prevSite || {});

  const { loading, error } = useSelector((state) => state.allSites);

  return (
    <form className={styles.form}>
      <h4>{title}</h4>
      {form.questions.map((question, i) => (
        <section className={styles.questions} key={question.value}>
          {t ? <label>{question.title}</label> : null}
          <input
            className={styles.formInputs}
            type="text"
            required={question.required}
            placeholder={question.title}
            value={prevSite && site[question.value]}
            name={question.value}
            onChange={(e) =>
              setSite({ ...site, [question.value]: e.target.value })
            }
          />
        </section>
      ))}
      <h3 className={styles.error}>{formError ? formError : null}</h3>
      <h3 className={styles.error}>{error ? error : null}</h3>
      {t ? (
        <p className={styles.warring}>
          * Todos los campos son requeridos, el path debe ser una url valida y
          no se admiten nombres repetidos
        </p>
      ) : null}
      {loading ? (
        <DotLoader color="#ff0026" />
      ) : (
        <button
          type="submit"
          onClick={(e) => {
            handleSubmit(e, site, site._id, t);
          }}
          className={styles.formCall}
        >
          {buttonLabel}
        </button>
      )}
    </form>
  );
};

export default MultiForm;
