import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import SiteItem from "./SiteItem";
import { BrowserRouter } from "react-router-dom";

const mockedUsedNavigate = jest.fn();


jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

test("Should render a site", () => {
  const site = {
    _id: "61e7d46487476b97dcb7bea2",
    name: "Antena3",
    path: "https://www.antena3.com",
    key: "antena3",
    description: "Pagina de antena3\nhttps://www.antena3.com/",
    createDate: "2022-12-27T23:48:26.952Z",
    __v: 0,
    publicPath: "https://dev2.antena3.com",
    site: "1672184906955",
  };

  const component = render(
    <BrowserRouter>
      <SiteItem site={site} />
    </BrowserRouter>
  );
  component.getByText("Antena3");
});
