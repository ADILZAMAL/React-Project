import React from "react";
import Common from "./Common";
import web from "../images/web.svg";
const About = () => {
  return (
    <>
      <Common
        heading="Welcome to about page"
        btnText="Contact Us"
        visit="/contact"
        imgSrc={web}
      />
    </>
  );
};

export default About;
