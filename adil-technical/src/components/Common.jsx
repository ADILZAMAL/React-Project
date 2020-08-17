import React from "react";
import { NavLink } from "react-router-dom";
const Common = (props) => {
  return (
    <section id="header" className="d-flex align-items-center">
      <div className="container-fluid ">
        <div className="row ">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-6 order-2 order-lg-1 pt-5 pt-lg-0">
                <h1>
                  {props.heading}
                  <br />
                  <strong className="brand-name">AdilTechnical</strong>
                </h1>
                <h2 className="my-3">we are a team of talented developer</h2>
                <div className="mt-3">
                  <NavLink to={props.visit} className="btn-get-started">
                    {props.btnText}
                  </NavLink>
                </div>
              </div>
              <div className="col-md-6 order-1 order-lg-2 header-img">
                <img src={props.imgSrc} className="img-fluid animated" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Common;
