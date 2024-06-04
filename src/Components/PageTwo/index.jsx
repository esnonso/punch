import Container from "../Containers/container";
import classes from "./index.module.css";
import Head from "../../assets/head-two.png";
import { PTags } from "../Text/index.jsx";

export default function PageTwo() {
  const grayStyle = {
    color: "#797A7F",
  };
  return (
    <Container
      width="100%"
      flex="column"
      background="#202229"
      color="white"
      skew="skewY(-1.5deg)"
      align="center"
      padding="0 0 5rem 0"
    >
      <div className={classes["first-container"]}>
        <div className={classes["header-cont"]}>
          <h1 className="bold-header-one">
            How it worked for Jason at <img src={Head} alt="..." />
            <span style={{ color: "#525AA0" }}> groove</span>
          </h1>
          <p>
            Zwilt enabled us to deliver on time, they have been heavy hitters in
            our corners since
          </p>
          <Container>
            <button className={classes["control-prev"]}>
              {/* <span>&#9668;</span>
              <span className={classes.circle}>&#9679;</span> */}
            </button>
            <button className={classes["control-next"]}>
              {/* <span className={classes["circle-next"]}>&#9679;</span>
              <span>&#9654;</span> */}
            </button>
          </Container>
        </div>

        <div className={classes["desc-cont"]}>
          <Container width="100%" margin="2rem 0 0 0">
            <Container
              height="5rem"
              width="5rem"
              background="#525AA0"
              radius="30px"
              align="center"
              justify="center"
              margin="0 0.8rem 0 0"
            >
              <PTags fontSize="20px">groove</PTags>
            </Container>
            <Container height="5rem" flex="column">
              <PTags fontSize="25px">Jason Makkki</PTags>
              <small style={grayStyle}>
                Engineer at <b>GROOVE</b>
              </small>
              <small style={grayStyle}>San Francisco</small>
            </Container>
          </Container>
          <p>
            Zwilt enabled us to deliver on time and they’ve been heavy hitters
            in our corner since. Zwilt enabled us to deliver on time and they’ve
            been heavy hitters in our corner since.Zwilt enabled us to deliver
            on time and they’ve been heavy hitters.
          </p>
        </div>
      </div>
    </Container>
  );
}
