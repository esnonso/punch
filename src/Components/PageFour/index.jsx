import Container from "../Containers/container.jsx";
import { PTags, H1Tags } from "../Text/index.jsx";
import SectionOne from "./sectionOne.jsx";
import SectionTwo from "./sectionTwo.jsx";
import SectionThree from "./sectionThree.jsx";
import classes from "./index.module.css";

const journey = [
  {
    headOne: "Find Your next star ",
    headTwo: "performer",
    desc: "Explore the vast Zwilt marketplace to find the candidate that meets your needs.",
    foot: "Join Now",
    background: "#EDEFFF",
    color: "#D5CEEF",
    component: SectionOne,
  },
  {
    headOne: "Evaluate to your ",
    headTwo: "heart's content",
    desc: "Assess the candidate through work history, transparent tests and video interviews.",
    foot: "Browse More",
    background: "#FFF7E1",
    color: "#FFE29F",
    component: SectionTwo,
  },
  {
    headOne: "Start building ",
    headTwo: "your team",
    desc: "Onboard your candidate right away and start creating the next big thing.",
    foot: "Join now",
    background: "#F3F3F3",
    color: SectionThree,
    component: SectionThree,
  },
];

export default function PageFour() {
  return (
    <Container width="100%" margin="5rem 0 0 0" flex="column">
      <h1
        className="bold-header"
        style={{ textAlign: "center", width: "100%", marginBottom: "2rem" }}
      >
        Start Your Journey Today
      </h1>
      {journey.map((jou, index) => (
        <div
          key={`${index}journey`}
          className={classes["journey-container"]}
          style={{ backgroundColor: jou.background }}
        >
          <div className={classes["first-section"]}>
            <div className={classes["journey-head"]}>
              <H1Tags color={jou.color} fontSize="50px">
                {index + 1}
              </H1Tags>
              <PTags margin="0 0 0.8rem 0.8rem" fontSize="25px">
                <b>
                  {jou.headOne} <br />
                  {jou.headTwo}
                </b>
              </PTags>
            </div>
            <div className={classes["journey-desc"]}>{jou.desc}</div>
            <div className={classes.action}>
              <button className={classes["explore-btn"]}></button>
              <small>
                <b>{jou.foot}</b>
              </small>
            </div>
          </div>
          {jou.component()}
          {/* <img src={jou.image} alt="..." /> */}
        </div>
      ))}
    </Container>
  );
}
