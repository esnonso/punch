import { useState } from "react";
import Header from "./Components/Header/header.jsx";
import Page from "./Components/PageOne/page.jsx";
import PageTwo from "./Components/PageTwo/index.jsx";
import PageThree from "./Components/PageThree/index.jsx";
import PageFour from "./Components/PageFour/index.jsx";
import PageFive from "./Components/PageFive/index.jsx";
import PageSix from "./Components/PageSix/index.jsx";
import Footer from "./Components/Footer/index.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <Header />
      <Page />
      <PageTwo />
      <PageThree />
      <PageFour />
      <PageFive />
      <PageSix />
      <Footer />
    </div>
  );
}

export default App;
