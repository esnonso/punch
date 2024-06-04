import { useState } from "react";
import Container from "../Containers/container.jsx";
import classes from "./index.module.css";
import ImageOne from "../../assets/one.png";
import ImageTwo from "../../assets/two.png";
import ImageThree from "../../assets/three.png";
import { PTags } from "../Text/index.jsx";

const reasons = [
  {
    head: "Onboard without the risk",
    reason: [
      "We pick the best for you to select.",
      "Thousands of vetted candidates in dozens of categories.",
      "Risk-free resource swapping for the best fit.",
    ],
    image: ImageOne,
    color: "#50589F",
  },
  {
    head: "An Open Book",
    reason: [
      "Easy and transparent one-to-one chat with candidates.",
      "Simple and convenient payment methods.",
      "Review past ratings.",
    ],
    image: ImageTwo,
    color: "#FFBE2E",
  },
  {
    head: "Stay In the Loop",
    reason: [
      "Track your staff activity down to every minute with screenshots.",
      "Comprehensive timesheet data to process payments.",
      "Create projects to organize and assign tasks more effectively.it.",
    ],
    image: ImageThree,
    color: "#C7F4C2",
  },
];

export default function PageFive() {
  const [currentPage, setCurrentPage] = useState(0);
  const styles = { width: "100%", textAlign: "center" };

  const nextPageHandler = () => {
    if (currentPage < 2) {
      setCurrentPage((prevState) => prevState + 1);
    }
  };

  const prevPageHandler = () => {
    if (currentPage > 0) {
      setCurrentPage((prevState) => prevState - 1);
    }
  };
  return (
    <Container
      width="100%"
      margin="5rem 0 0 0"
      flex="column"
      background="#F4F6FF"
      padding="0 0 3rem 0"
    >
      <h1 className="bold-header" style={styles}>
        Why Choose us
      </h1>
      <p style={styles}>
        We take complex hiring processes - and simplify them. Connecting you to
        the world’s highly qualified talent pool.
      </p>

      <div className={classes["reason-container"]}>
        <button className={classes.prev} onClick={prevPageHandler}>
          &#8249;
        </button>
        <div className={classes.reason}>
          <div className={classes["reason-head"]}>
            <h1 className="bold-header">{reasons[currentPage].head}</h1>

            {reasons[currentPage].reason.map((r, i) => (
              <div key={`${i}reason`} className={classes["reason-div"]}>
                <span
                  style={{ backgroundColor: reasons[currentPage].color }}
                  className={classes.dash}
                ></span>
                <p>{r}</p>
              </div>
            ))}

            <Container width="100%" align="center" margin="1rem 0 0 0">
              <button className={classes["explore-btn"]}></button>
              <PTags fontSize="18px">
                <b>Learn more</b>
              </PTags>
            </Container>
          </div>
          <img
            src={reasons[currentPage].image}
            alt="..."
            className={classes.image}
          />
        </div>
        <button className={classes.next} onClick={nextPageHandler}>
          &#8250;
        </button>
      </div>
    </Container>
  );
}
