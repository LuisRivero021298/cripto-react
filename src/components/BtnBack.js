import React from "react";
import { Link } from "react-router-dom";

function BtnBack() {
  return (
    <>
      <Link to="/">
        <div className="btn__back--reverse btn--circle">
          <i className="material-icons">arrow_back</i>
        </div>
      </Link>
    </>
  );
}

export default BtnBack;
