import Woman from "../../assets/woman.png";
import Man2 from "../../assets/second-man.png";
import classes from "./index.module.css";
import { PTags } from "../Text";

export default function SectionThree() {
  return (
    <div className={classes["second-section-three"]}>
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: "33%",
            width: "100%",
          }}
        >
          <img
            src={Woman}
            alt="..."
            className={classes["second-section-three-image"]}
          />
          <PTags margin="0 0 0 0.8rem" fontSize="25px">
            <b>
              Allison <br /> Parker
            </b>
          </PTags>
        </div>
        <PTags margin="2rem 0 0 0.8rem" fontSize="20px">
          <b>Ruby Developer</b>
        </PTags>
        <PTags margin="0.2rem 0 0 0.8rem">
          Redwood city california, 7 years experience
        </PTags>
        <PTags margin="1rem 0 0 0.8rem" fontSize="20px">
          <b>LEELAR</b>
        </PTags>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <PTags fontSize="35px" color="white">
          <b>LEELAR</b>
        </PTags>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <PTags fontSize="70px" color="#20A67D">
          <b>10X</b>
        </PTags>
        <PTags fontSize="30px" color="#20A67D" margin="1rem 0">
          <b>Start building your team</b>
        </PTags>
      </div>
    </div>
  );
}
