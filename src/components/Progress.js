import React from "react";
import { Bounce } from "react-reveal";
import ProgressBar from "react-customizable-progressbar";
import { Card } from "react-bootstrap";
const Progress = () => {
  return (
    <>
      <div
        className="row text-center justify-content-center mt-10 "
        id="academic"
      >
        <div className="col-xl-6 col-lg-8">
          <Bounce bottom>
            <h2 className="font-weight-bold mt-5">Skills</h2>
          </Bounce>
        </div>
      </div>
      <div className="d-flex justify-content-between"></div>
    </>
  );
};

export default Progress;
