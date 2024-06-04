import { useState } from "react";
import Container from "../Containers/container.jsx";
import classes from "./index.module.css";
import ImageOne from "../../assets/one.png";
import ImageTwo from "../../assets/two.png";
import ImageThree from "../../assets/three.png";

const reasons = [
  {
    head: "Onboard without the risk",
    reason: [
      "We pick the best for you to select.",
      "Thousands of vetted candidates in dozens of categories.",
      "Risk-free resource swapping for the best fit.",
    ],
    image: ImageOne,
  },
  {
    head: "An Open Book",
    reason: [
      "Easy and transparent one-to-one chat with candidates.",
      "Simple and convenient payment methods.",
      "Review past ratings.",
    ],
    image: ImageTwo,
  },
  {
    head: "Stay In the Loop",
    reason: [
      "Track your staff activity down to every minute with screenshots.",
      "Comprehensive timesheet data to process payments.",
      "Create projects to organize and assign tasks more effectively.it.",
    ],
    image: ImageThree,
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
            <ul>
              {reasons[currentPage].reason.map((r, i) => (
                <li key={`${i}reason`}>{r}</li>
              ))}
            </ul>
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
