import Container from "../Containers/container";
import classes from "./page.module.css";
import Medal from "../../assets/medal.png";
import Sub from "../../assets/sub.png";
import Profile from "../../assets/profile.png";
import Shopify from "../../assets/shopify.png";
import Data from "../../assets/data-sc.png";
import Magento from "../../assets/magento.png";
import Dotnet from "../../assets/dotnet.png";
import WebFlow from "../../assets/web-flow.png";
import Next from "../../assets/btn-pin.png";
import Previous from "../../assets/previous.png";
import Figma from "../../assets/figma.png";
import Photoshop from "../../assets/photoshop.png";
import Unreal from "../../assets/unreal.png";
import Illustrator from "../../assets/illustrator.png";
import Cinema from "../../assets/cinema.png";

const itCat = [
  { name: "Shopify Developer", logo: Shopify },
  { name: "Magento Developer", logo: Magento },
  { name: "Data Scientist", logo: Data },
  { name: "Webflow Developer", logo: WebFlow },
  { name: "Dotnet Developer", logo: Dotnet },
  { name: "", logo: Next },
];

const designCat = [
  { name: "", logo: Previous },
  { name: "UX Designer", logo: Figma },
  { name: "Graphics Designer", logo: Photoshop },
  { name: "Illustration Artist", logo: Illustrator },
  { name: "Unreal Engine", logo: Unreal },
  { name: "Cinema 4D", logo: Cinema },
];

const categoryTags = [
  {
    tag: "Find Dev and IT Professionals to scale your business",
    category: itCat,
  },
  {
    tag: "Explore Creative Individuals with a Keen eye for detail",
    category: designCat,
  },
];

export default function Page(props) {
  return (
    <Container width="100%" flex="column">
      <div
        className={`${classes["diagonal-lines"]} ${classes["diagonal-one"]}`}
      ></div>
      <div
        className={`${classes["diagonal-lines"]} ${classes["diagonal-two"]}`}
      ></div>
      <div
        className={`${classes["diagonal-lines"]} ${classes["diagonal-three"]}`}
      ></div>
      <div
        className={`${classes["diagonal-lines"]} ${classes["diagonal-four"]}`}
      ></div>
      <div
        className={`${classes["diagonal-lines"]} ${classes["diagonal-five"]}`}
      ></div>

      <Container
        width="100%"
        flex="column"
        background="#EDEFFF"
        skew="skewY(-1.5deg)"
        align="center"
        margin="0.8rem 0 0 0"
      >
        <Container
          width="100%"
          flex="column"
          skew="skewY(1.5deg)"
          align="center"
          margin="7rem 0 3rem 0"
        >
          <h1 className={`bold-header ${classes["business-header"]}`}>
            Your one-stop marketplace for finding the talent your business needs
          </h1>

          <div className={classes["business-category-sub"]}>
            <div className={classes["business-category-sub-one"]}>
              <div className={classes["sub-cat-container"]}>
                <p>Find Dev and IT Professionals to scale your business</p>
                <Container width="100%" wrap="wrap">
                  <Container width="50%">
                    <img src={Medal} className={classes.image} alt="..." />
                    <p style={{ fontSize: "16px", fontWeight: 400, margin: 0 }}>
                      989 Skills
                    </p>
                  </Container>
                  <Container width="50%">
                    <img src={Sub} className={classes.image} alt="..." />
                    <p style={{ fontSize: "16px", fontWeight: 400, margin: 0 }}>
                      485 Sub-Categories
                    </p>
                  </Container>
                  <Container width="50%">
                    <img src={Profile} className={classes.image} alt="..." />
                    <p style={{ fontSize: "16px", fontWeight: 400, margin: 0 }}>
                      1011 Profiles
                    </p>
                  </Container>
                </Container>
              </div>
            </div>
            <div className={classes["business-category-sub-two"]}>
              {itCat.map((item, index) => (
                <div key={`${index}itCat`} className={classes["cat-two-inner"]}>
                  <div
                    className={classes["cat-logo"]}
                    style={{ borderRadius: item.name === "" ? "15px" : "50%" }}
                  >
                    <img src={item.logo} alt="..." />
                  </div>
                  <p style={{ textAlign: "center" }}>{item.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={classes["business-category-sub"]}>
            <div className={classes["business-category-sub-one"]}>
              <div className={classes["sub-cat-container"]}>
                <p>Explore Creative Individuals with a Keen eye for detail</p>
                <Container width="100%" wrap="wrap">
                  <Container width="50%">
                    <img src={Medal} className={classes.image} alt="..." />
                    <p style={{ fontSize: "16px", fontWeight: 400, margin: 0 }}>
                      989 Skills
                    </p>
                  </Container>
                  <Container width="50%">
                    <img src={Sub} className={classes.image} alt="..." />
                    <p style={{ fontSize: "16px", fontWeight: 400, margin: 0 }}>
                      485 Sub-Categories
                    </p>
                  </Container>
                  <Container width="50%">
                    <img src={Profile} className={classes.image} alt="..." />
                    <p style={{ fontSize: "16px", fontWeight: 400, margin: 0 }}>
                      1011 Profiles
                    </p>
                  </Container>
                </Container>
              </div>
            </div>
            <div className={classes["business-category-sub-two"]}>
              {designCat.map((item, index) => (
                <div key={`${index}itCat`} className={classes["cat-two-inner"]}>
                  <div
                    className={classes["cat-logo"]}
                    style={{ borderRadius: item.name === "" ? "15px" : "50%" }}
                  >
                    <img src={item.logo} alt="..." />
                  </div>
                  <p style={{ textAlign: "center" }}>{item.name}</p>
                </div>
              ))}{" "}
            </div>
          </div>

          <Container width="100%">
            <Container
              width="50%"
              justify="flex-start"
              padding="0.5rem 0 0 2rem"
              align="center"
            >
              <button className={classes["explore-btn"]}></button>
              <b>Explore more</b>
            </Container>
            <Container width="50%" justify="flex-start" padding="0.5rem 0 0 0">
              <p style={{ margin: 0 }}>
                <b>30 more</b> to explore
              </p>
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  );
}
