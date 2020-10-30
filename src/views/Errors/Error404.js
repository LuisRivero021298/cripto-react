import React from "react";
import { Link } from "react-router-dom";
import Error404Imagen from "../../assets/images/error404.png";

const Error404 = () => {
  return (
    <div className="Error404">
      <section className="Error404__imagen__container">
        <img
          src={Error404Imagen}
          alt="error404"
          className="Error404__imagen"
        />
      </section>
      <section className="Error404__info">
        <h3 className="Error404__text">Oops!</h3>
        <span className="Error404__text--secondary">
          Sorry, this page does not exists
        </span>
        <button type="button" className="btn__primary">
          <Link to="/">Go home</Link>
        </button>
      </section>
    </div>
  );
}

export default Error404;
