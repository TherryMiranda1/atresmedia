import React from "react";
import { channels } from "../../static/data";
import styles from "./NavBar.module.css";
import plus from "../../assets/icons/plus-svgrepo-com.svg";
import { useNavigate } from "react-router-dom";

import { setFilter } from "../../services/sitesProvider";
import { useDispatch,} from "react-redux";

export const NavBar = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();
  return (
    <div className={styles.navbar}>
      <img
        onClick={() => {
          dispatch(setFilter(""));
          navigate(`/`);
        }}
        alt={channels[0]?.title}
        src={channels[0]?.image}
      />

      <section className={styles.navbarChannels}>
        {channels.slice(1, channels.length).map((channel) => (
          <img
            onClick={() => {
              navigate(`/`);
              dispatch(setFilter(channel.title));
            }}
            alt={channel.title}
            src={channel.image}
            key={channel.id}
          />
        ))}
      </section>
      <img
        className={styles.plus}
        onClick={() => navigate(`/new-site`)}
        alt="añadir"
        src={plus}
      />
    </div>
  );
};
