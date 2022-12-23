import React from "react";
import { form } from "../../static/data";

const MultiForm = ({
  styles,
  handleChangeText,
  handleRegister,
  error,
  formError,
}) => {
  return (
    <form className={styles.form}>
      {form.options.map((option, i) => (
        <input
          key={option.value}
          className={styles.formInputs}
          type="text"
          required={option.required}
          placeholder={option.title}
          name={option.value}
          onChange={(e) => handleChangeText(option.value, e.target.value)}
        />
      ))}
      <h3 className={styles.error}>{formError ? formError : null}</h3>
      <h3 className={styles.error}>{error ? error : null}</h3>
      <button
        type="submit"
        onClick={(e) => {
          handleRegister(e);
        }}
        className={styles.formCall}
      >
        Crear
      </button>
    </form>
  );
};

export default MultiForm;
