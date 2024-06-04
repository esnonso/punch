import Container from "../Containers/container.jsx";
import { PTags } from "../Text/index.jsx";
import classes from "./index.module.css";
import Logo from "../../assets/logo-nobg.png";

const footerLinks = [
  {
    tag: "PLATFORM",
    links: ["Find Work", "Find Talent", "Categories", "About Us"],
  },
  {
    tag: "CATEGORIES",
    links: ["Data Science", "IT & Networking", "Web & Mobile"],
  },
  {
    tag: "HELP",
    links: ["FAQS", "Contact Us"],
  },
  {
    tag: "GET IN TOUCH",
    links: ["Instagram", "Linked In", "Twitter"],
  },
];

export default function Footer() {
  return (
    <footer>
      <Container
        width="100%"
        justify="center"
        align="center"
        skew="skewY(-1.5deg)"
        background="#525AA0"
      >
        <Container
          width="100%"
          justify="center"
          align="center"
          skew="skewY(1.5deg)"
          color="white"
          height="16rem"
          flex="column"
          padding="0.5rem"
          textAlign="center"
        >
          <p className={classes["bold-tag"]}>
            <b>Need a job well done, and well done? Get started</b>
          </p>
          <button className={classes["foot-btn"]}></button>
        </Container>
      </Container>

      <div className={classes["footer-main"]}>
        <div className={classes["footer-one"]}>
          <img src={Logo} alt="..." />
          <p>
            <small>
              We take complex hiring and simplify them, connecting you to the
              world's highly qualified talent pool
            </small>
          </p>

          <p className={classes.links}>
            <b>LINKS AND REDIRECTS</b>
          </p>

          <div className={classes["link-btn-container"]}>
            <button className={classes["link-btn"]}>Hire Now</button>
            <button className={classes["link-btn"]}>Apply Now</button>
          </div>
        </div>
        <div className={classes["footer-two"]}>
          <p className={classes["bold-tag"]}>
            <b>
              Connecting right people to the <br />
              right businesses
            </b>
          </p>

          <div className={classes["link-cont"]}>
            {footerLinks.map((link, index) => (
              <ul className={classes["class-links"]} key={`${index}foot`}>
                <li className={classes["links-head"]}>
                  <small>{link.tag}</small>
                </li>
                {link.links.map((l, i) => (
                  <li key={`${i}link-links`} className={classes["link-links"]}>
                    <small>{l}</small>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>

      <div className={classes["footer-bottom"]}>
        <div>
          <small>All rights reseved by zwilt</small>
        </div>
        <div>
          <small>
            <a href="#">Privacy policy</a>
          </small>{" "}
          <small>
            <a href="#">Terms and conditions</a>
          </small>
        </div>
      </div>
    </footer>
  );
}
