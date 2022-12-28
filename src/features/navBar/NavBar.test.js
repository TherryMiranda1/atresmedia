import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { NavBar } from "./NavBar";

import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

//declaramos una funcion de jest para mockear el useNavigate
const mockedUsedNavigate = jest.fn();

// el componente debe estar contenido dentro de un router
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

// el componente debe estar contenido dentro de un provider de redux
const initialState = { filter: "" };
const mockStore = configureStore();
let store;

test("Should render an svg logo", () => {
  store = mockStore(initialState);
  const component = render(
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    </Provider>
  );
  component.getAllByAltText("mega");
});
