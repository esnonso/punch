import { useState } from "react";
import Container from "../Containers/container";
import Video from "../../assets/video.png";
import classes from "./index.module.css";

const steps = [
  {
    head: "Resume Screening",
    desc: "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.",
  },
  {
    head: "Video Interview",
    desc: "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.",
  },
  {
    head: "Technincal Evaluation",
    desc: "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.",
  },
  {
    head: "Application Review",
    desc: "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.",
  },
  {
    head: "Let's get to work",
    desc: "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.",
  },
];

export default function PageThree(props) {
  const [isExpanded, setIsExpanded] = useState("");

  // const expandDivHandler = (div) => {
  //   setIsExpanded(div);
  // };
  return (
    <Container width="100%" margin="7rem 0 0 0">
      <div className={classes.container}>
        <h1 className="bold-header">How we ensure you are in good hands</h1>
        <p>
          With our comprehensive screening process, we hand-pick highly skilled
          candidates so you can onboard them in a matter of days.
        </p>

        {steps.map((step, index) => (
          <div
            key={`${index}step`}
            className={classes.step}
            onMouseEnter={() => setIsExpanded(`${index}step`)}
            onMouseLeave={() => setIsExpanded("")}
          >
            <div className={classes["step-head"]}>
              <div className={classes["step-img"]}>
                <img src={Video} alt="..." />
              </div>
              <p>
                <b>Step {index + 1}:</b> {step.head}
              </p>
            </div>
            <p
              style={{
                display: isExpanded === `${index}step` ? "block" : "none",
              }}
            >
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
}
