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
      dispatch(setError(response.statusText));
      console.error(response);
    }
  } catch (e) {
    console.error(e);
    throw e;
  }
};
