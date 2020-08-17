import React from "react";
import Common from "./Common";
import web from "../images/web.svg";
const Home = () => {
  return (
    <>
      <Common
        heading="Grow your business with"
        btnText="Get Started"
        visit="/service"
        imgSrc={web}
      />
    </>
  );
};

export default Home;
