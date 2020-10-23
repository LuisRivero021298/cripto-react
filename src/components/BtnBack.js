import React from "react";

function BtnBack({ history }) {
  const hanndleBackHistory = () => {
    history.push("/");
  };
  return (
    <div className="btn__back btn--circle" onClick={hanndleBackHistory}>
      <i className="material-icons">arrow_back</i>
    </div>
  );
}

export default BtnBack;
