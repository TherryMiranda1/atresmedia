import { setError } from "./sites.allSites.slice";
export const doApiCall = async ({ url, method, body, dispatch }) => {
  try {
    const response = await fetch(url, {
      method,
      body,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      return await response.json();
    } else {
      dispatch(
        setError(
          `${response.statusText} - Recuerda que el campo name debe ser unico y que todos los campos son requeridos`
        )
      );
      return;
    }
  } catch (e) {
    console.error(e);
    dispatch(
      setError(
        "no se ha podido realizar esta accion, por favor intentalo mas tarde"
      )
    );
    throw e;
  }
};
