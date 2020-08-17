import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="col-10 col-md-4">
        <div className="card">
          <img src={props.imgSrc} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.cardTitle}</h5>
            <p className="card-text">{props.cardText}</p>
            <NavLink to="#" className="btn btn-primary">
              {props.btnText}
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
