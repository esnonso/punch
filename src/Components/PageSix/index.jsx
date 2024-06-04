import Container from "../Containers/container.jsx";
import classes from "./index.module.css";

const general = [
  "How long are the average projects",
  "How much can I earn?",
  "How does the payment works?",
];

const process = [
  "I want to work part-time, is that possible",
  "How long are the average projects?",
  "How long are the average projects?",
  "How much can I earn?",
];

export default function PageSix() {
  return (
    <Container
      width="100%"
      flex="column"
      background="#F3F3F3"
      skew="skewY(-1.5deg)"
      margin="-1.5rem 0 0 0"
      padding="0 0 3rem 0"
    >
      <Container
        width="100%"
        padding="3rem 0 0 0"
        skew="skewY(1.5deg)"
        flex="column"
      >
        <h1
          className="bold-header"
          style={{ textAlign: "center", width: "100%" }}
        >
          Frequently Asked questions
        </h1>

        <div className={classes.questions}>
          <div className={classes.head}>
            <p className={classes["list-head"]}>General</p>
            <p className={classes["list-space"]}></p>
            <p className={classes["list-content"]}>
              I want to work part-time, is that possible?
            </p>
          </div>
          {general.map((g, i) => (
            <div className={classes.head} key={`${i}general`}>
              <p className={classes["list-space"]}></p>
              <p className={classes["list-space"]}></p>
              <p className={classes["list-content"]}>{g}</p>
            </div>
          ))}

          <div className={classes.head}>
            <p className={classes["list-head"]}>General</p>
            <p className={classes["list-head"]}>Joining Process</p>
            <p className={classes["list-content"]}>
              I want to work part-time, is that possible?
            </p>
          </div>

          {process.map((g, i) => (
            <div className={classes.head} key={`${i}process`}>
              <p className={classes["list-space"]}></p>
              <p className={classes["list-space"]}></p>
              <p className={classes["list-content"]}>{g}</p>
            </div>
          ))}

          <hr
            style={{
              width: "100%",
              height: "0.5px",
              backgroundColor: " #D6D6D6",
              boxSizing: "border-box",
            }}
          />
        </div>
      </Container>
    </Container>
  );
}
