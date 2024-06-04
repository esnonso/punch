import Container from "../Containers/container";
import classes from "./header.module.css";
import Head from "../../assets/head.png";
import MobileNavigator from "../MobileNavigator";
import Hamburger from "../../assets/hamburger.png";
import { useState } from "react";

const links = [
  { name: "Find Work", href: "#" },
  { name: "Find Talent", href: "#" },
  { name: "Articles", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Contact Us", href: "#" },
];

const itCategory = [
  "Python Developer",
  "Shopify Developer",
  "MERN Stack Developer",
  "Full Stack Developer",
  "Data Scientist",
  "Front End Developer",
  "Python Developer",
  "Shopify Developer",
  "MERN Stack Developer",
  "Full Stack Developer",
  "Front End Developer",
];

export default function Header() {
  const [sidebar, showSideBar] = useState(false);

  const showSideBarHandler = () => showSideBar(true);
  const hideSideBarHandler = () => showSideBar(false);
  return (
    <div className={classes["header-container"]}>
      <header className={classes.header}>
        <div className={classes["logo"]}></div>

        <ul className={classes["links"]}>
          {links.map((l, i) => (
            <li key={`${i}link`}>
              <a href={l.href}>{l.name}</a>
            </li>
          ))}
        </ul>

        <Container height="100%" align="center">
          <li className={classes["login-link"]}>
            <a href="#">Login</a>
          </li>
          <button className={classes["join-us"]}>Join Now</button>
          <img
            src={Hamburger}
            alt="..."
            className={classes.hamburger}
            onClick={showSideBarHandler}
          />
        </Container>
      </header>

      <div className={classes["banner-head"]}>
        <div className={classes["banner"]}>
          <h1 className="bold-header-one">
            <b>
              Finding the right fit has{" "}
              <img src={Head} alt="" className={classes["head"]} /> never been
              easier
            </b>
          </h1>
          <p>
            With our rigorous vetting process, you'll never have to worry about
            finding the ideal candidate ever again
          </p>
          <div className={classes["search-container"]}>
            <input placeholder="Looking for design" />
            <button className={classes["search-btn"]}></button>
          </div>
        </div>
      </div>

      <Container width="100%" flex="column" align="center">
        <div className={classes["category-container"]}>
          <Container width="100%" justify="center">
            <button
              className={classes["category-btn"]}
              style={{ transform: "scale(1.1)", backgroundColor: "#C8EFC4" }}
            >
              IT &#38; Development
            </button>
            <button className={classes["category-btn"]}>
              Design and creative
            </button>
          </Container>
          <div className={classes["category"]}>
            {itCategory.map((item, index) => (
              <p key={`${index}cat`}>{item}</p>
            ))}
            <p>Explore More</p>
          </div>
        </div>
      </Container>

      {sidebar && <MobileNavigator links={links} onHide={hideSideBarHandler} />}
    </div>
  );
}
