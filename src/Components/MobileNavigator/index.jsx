import { createPortal } from "react-dom";
import classes from "./index.module.css";
import Container from "../Containers/container";
import CloseBtn from "../../assets/close-btn.png";

const Backdrop = () => {
  return createPortal(
    <div className={classes.backdrop}></div>,
    document.getElementById("overlays")
  );
};

const Sidebar = (props) => {
  return createPortal(
    <div className={classes.sidebar}>
      <Container width="100%" justify="flex-end">
        <img
          src={CloseBtn}
          alt="..."
          onClick={() => props.onHide()}
          className={classes.close}
        />
      </Container>
      {props.links.map((l, i) => (
        <div key={`${i}navLink`} style={{ width: "100%" }}>
          <a href={l.href}>{l.name}</a>
        </div>
      ))}
      <div style={{ width: "100%" }}>
        <a href="#">Sign In</a>
      </div>
      <div style={{ width: "100%" }}>
        <a href="#">Join Us</a>
      </div>
    </div>,
    document.getElementById("overlays")
  );
};

export default function MobileNavigator(props) {
  return (
    <>
      <Backdrop />
      <Sidebar links={props.links} onHide={props.onHide} />
    </>
  );
}
