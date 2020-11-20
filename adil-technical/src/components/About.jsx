import React from "react";
import Common from "./Common";
import web from "../images/web.svg";
import {PageTransition} from '@steveeeie/react-page-transition'
const About = ({location}) => {
  return (
    <>
     <PageTransition
              preset="moveToLeftFromRight"
              transitionKey={location.pathname}
            >
      <Common
        heading="Welcome to about page"
        btnText="Contact Us"
        visit="/contact"
        imgSrc={web}
      />
      </PageTransition>
    </>
  );
};

export default About;
