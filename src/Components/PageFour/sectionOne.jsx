import Man from "../../assets/man.png";
import Man2 from "../../assets/second-man.png";
import Image from "../../assets/man-three.png";
import classes from "./index.module.css";

export default function SectionOne() {
  const imageStyle = {
    height: "60%",
    width: "100%",
    backgroundColor: "#FFDACE",
    borderRadius: "15px",
  };

  const imageStyle2 = {
    height: "60%",
    width: "100%",
    backgroundColor: "#C8EFC4",
    borderRadius: "15px",
  };

  const imageStyle3 = {
    height: "60%",
    width: "100%",
    backgroundColor: "#FDDD8B",
    borderRadius: "15px",
  };

  const imageStyle4 = {
    height: "60%",
    width: "100%",
    backgroundColor: "#D8D2FF",
    borderRadius: "15px",
  };
  return (
    <div className={classes["second-section"]}>
      <div>
        <img src={Man} alt="..." style={imageStyle} />
        <p className={classes["job-title"]}>
          <small>
            <b>Ruby Developer</b>
          </small>
        </p>
        <p className={classes["job-location"]}>
          <small>Redwood City, California, 7 years experience</small>
        </p>
      </div>
      <div>
        <img src={Image} alt="..." style={imageStyle2} />
        <p className={classes["job-title"]}>
          <small>
            <b>System Ops Engineer</b>
          </small>
        </p>
        <p className={classes["job-location"]}>
          <small>Abu Dhabi UAE, 5 years Experience</small>
        </p>
      </div>
      <div>
        <img src={Man2} alt="..." style={imageStyle4} />
        <p className={classes["job-title"]}>
          <b>Ruby Developer</b>
        </p>
        <p className={classes["job-location"]}>
          <small>Redwood City, California7 years experience</small>
        </p>
      </div>
      <div>
        <img src={Man} alt="..." style={imageStyle3} />
        <p className={classes["job-title"]}>
          <b>Ruby Developer</b>
        </p>
        <p className={classes["job-location"]}>
          <small>Redwood City, California7 years experience</small>
        </p>
      </div>
    </div>
  );
}
