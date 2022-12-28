import atresmedia from "../assets/teams/logo-atresplayer.svg";
import antena3 from "../assets/teams/antena-3-logo.svg";
import lasexta from "../assets/teams/lasexta-logo.svg";
import neox from "../assets/teams/neox-logo.svg";
import nova from "../assets/teams/nova-logo.svg";
import mega from "../assets/teams/mega-logo.svg";
import flooxer from "../assets/teams/flooxer-logo.svg";

export const channels = [
  {
    id: "_01",
    title: "atresmedia",
    image: atresmedia,
  },
  {
    id: "_02",
    title: "antena3",
    image: antena3,
  },
  {
    id: "_03",
    title: "lasexta",
    image: lasexta,
  },
  {
    id: "_04",
    title: "neox",
    image: neox,
  },
  {
    id: "_05",
    title: "nova",
    image: nova,
  },
  {
    id: "_06",
    title: "mega",
    image: mega,
  },
  {
    id: "_07",
    title: "flooxer",
    image: flooxer,
  },
];

export const form = {
  id: 6,
  type: "text",
  questions: [
    {
      title: "Name",
      value: "name",
      image: "",
      required: true,
    },
    { title: "Description", value: "description", image: "", required: true },
    { title: "Path", value: "path", image: "", required: true },
    { title: "Public Path", value: "publicPath", image: "", required: true },
    { title: "Key", value: "key", image: "", required: true },
  ],
};
