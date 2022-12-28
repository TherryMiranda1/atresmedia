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
  t
}) => {
  const [site, setSite] = useState(prevSite || {});

  const { loading, error } = useSelector((state) => state.allSites);

  return (
    <form className={styles.form}>
      <h4>{title}</h4>
      {form.options.map((option, i) => (
        <input
          key={option.value}
          className={styles.formInputs}
          type="text"
          required={option.required}
          placeholder={option.title}
          value={prevSite && site[option.value]}
          name={option.value}
          onChange={(e) => setSite({ ...site, [option.value]: e.target.value })}
        />
      ))}
      <h3 className={styles.error}>{formError ? formError : null}</h3>
      <h3 className={styles.error}>{error ? error : null}</h3>
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
