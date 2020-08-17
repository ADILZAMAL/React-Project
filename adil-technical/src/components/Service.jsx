import React from "react";
import Card from "./Card";
import s1 from "../images/s1.jpg";
const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="img-center">Our Service</h1>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              <Card
                cardTitle="reaw"
                btnText="arted"
                imgSrc={s1}
                cardText="fgasdfdsf"
              />
              <Card
                cardTitle="reaw"
                btnText="arted"
                imgSrc={s1}
                cardText="fgasdfdsf"
              />
              <Card
                cardTitle="reaw"
                btnText="arted"
                imgSrc={s1}
                cardText="fgasdfdsf"
              />
              <Card
                cardTitle="reaw"
                btnText="arted"
                imgSrc={s1}
                cardText="fgasdfdsf"
              />
              <Card
                cardTitle="reaw"
                btnText="arted"
                imgSrc={s1}
                cardText="fgasdfdsf"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
