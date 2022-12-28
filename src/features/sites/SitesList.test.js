import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import SitesList from "./SitesList";

test("renders content", () => {
  const personas = [
    {
      email: "Shanna@melissa.tv",
      id: 2,
      image:
        "https://res.cloudinary.com/dzkcloud/image/upload/v1651653358/cld-sample.jpg",
      name: "Ervin Howell",
      phone: "010-692-6593 x09125",
      username: "Antonette",
      website: "anastasia.net",
      address: {
        city: "McKenziehaven",
        street: "Douglas Extension",
        suite: "Suite 847",
        zipcode: "59590-4157",
      },
    },
  ];

  const component = render(<SitesList personas={personas} />);
  component.getByText("Ervin Howell");
});
