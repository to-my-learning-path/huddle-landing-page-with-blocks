import React from "react";
import "./index.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header__top">
          <img className="logo" src="./images/logo.svg" alt="Huddle Logo" />
          <a className="header__cta" href="#">
            Try It Free
          </a>
        </div>
        <div className="hero">
          <div className="hero__content">
            <h1>Build The Community Your Fans Will Love</h1>
            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <a href="#">Get Started For Free</a>
          </div>
          <img src="./images/illustration-mockups.svg" alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
