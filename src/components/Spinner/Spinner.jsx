import React from "react";

import "./spinner.scss";

import { ReactComponent as SpinnerSVG } from "../../assets/img/oval.svg";

const Spinner = () => {
  return (
    <div className="spinner-box">
      <SpinnerSVG />
    </div>
  );
};

export default Spinner;
