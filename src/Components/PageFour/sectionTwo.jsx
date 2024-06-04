import Man from "../../assets/man-three.png";
import Woman from "../../assets/woman-two.jpg";
import classes from "./index.module.css";

export default function SectionTwo() {
  const imageStyle = {
    border: "4px #D8D2FF solid",
  };

  const imageTwoStyle = {
    border: "4px #C8EFC4 solid",
  };

  const imageThreeStyle = {
    border: "4px #FDDD8B solid",
  };

  const hrContainer = {
    width: "100%",
    padding: "0.8rem",
    display: "flex",
    flexDirection: "column",
  };

  const headerStyle = {
    backgroundColor: "#D8D2FF",
  };

  const bodyStyle = {
    backgroundColor: "#F6F6F6",
  };

  const headerTwoStyle = {
    backgroundColor: "#C8EFC4",
  };

  const headerThreeStyle = {
    backgroundColor: "#FDDD8B",
  };
  return (
    <div className={classes["second-section-two"]}>
      <div className={classes["second-section-two-first"]}>
        <div className={classes["second-section-two-head"]}>
          <img
            src={Man}
            alt="..."
            style={imageStyle}
            className={classes["second-section-two-image"]}
          />
          <div style={hrContainer}>
            <span style={headerStyle} className={classes["line"]}></span>
            <span style={headerStyle} className={classes["line-long"]}></span>
          </div>
        </div>
        <div style={hrContainer}>
          <span style={bodyStyle} className={classes["line"]}></span>
          <span style={bodyStyle} className={classes["line-long"]}></span>
        </div>
        <div style={hrContainer}>
          <span style={bodyStyle} className={classes["line"]}></span>
          <span style={bodyStyle} className={classes["line-long"]}></span>
        </div>
        <div style={hrContainer}>
          <span style={bodyStyle} className={classes["line"]}></span>
          <span style={bodyStyle} className={classes["line-long"]}></span>
        </div>
      </div>

      <div className={classes["second-section-two-second"]}>
        <div className={classes["second-section-two-section-one"]}>
          <div className={classes["second-section-two-head"]}>
            <img
              src={Woman}
              alt="..."
              style={imageTwoStyle}
              className={classes["second-section-two-image"]}
            />
            <div style={hrContainer}>
              <span style={headerTwoStyle} className={classes["line"]}></span>
              <span
                style={headerTwoStyle}
                className={classes["line-long"]}
              ></span>
            </div>
          </div>
          <div style={hrContainer}>
            <span style={bodyStyle} className={classes["line"]}></span>
            <span style={bodyStyle} className={classes["line-long"]}></span>
          </div>
          <div style={hrContainer}>
            <span style={bodyStyle} className={classes["line"]}></span>
            <span style={bodyStyle} className={classes["line-long"]}></span>
          </div>
          <div style={hrContainer}>
            <span style={bodyStyle} className={classes["line"]}></span>
            <span style={bodyStyle} className={classes["line-long"]}></span>
          </div>
        </div>

        <div className={classes["second-section-two-section-two"]}>
          <div className={classes["second-section-two-head"]}>
            <img
              src={Woman}
              alt="..."
              style={imageThreeStyle}
              className={classes["second-section-two-image"]}
            />
            <div style={hrContainer}>
              <span style={headerThreeStyle} className={classes["line"]}></span>
              <span
                style={headerThreeStyle}
                className={classes["line-long"]}
              ></span>
            </div>
          </div>
          <div style={hrContainer}>
            <span style={bodyStyle} className={classes["line"]}></span>
            <span style={bodyStyle} className={classes["line-long"]}></span>
          </div>
          <div style={hrContainer}>
            <span style={bodyStyle} className={classes["line"]}></span>
            <span style={bodyStyle} className={classes["line-long"]}></span>
          </div>
          <div style={hrContainer}>
            <span style={bodyStyle} className={classes["line"]}></span>
            <span style={bodyStyle} className={classes["line-long"]}></span>
          </div>
        </div>
      </div>
    </div>
  );
}
