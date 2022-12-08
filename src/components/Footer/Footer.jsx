import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "./index.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <img className="logo" src="./images/logo.svg" alt="" />
        <div className="footer__body">
          <div className="footer__contact-us">
            <div className="contact-us__item">
              <img src="./images/icon-location.svg" alt="" />{" "}
              <p>
                Lorem idivsum dolor sit amet, consectetur adidiviscing elit, sed
                do eiusmod temdivor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
            <div className="contact-us__item">
              <img src="./images/icon-phone.svg" alt="" />{" "}
              <p>+1-543-123-4567</p>
            </div>
            <div className="contact-us__item">
              <img src="./images/icon-email.svg" alt="" />{" "}
              <p>example@huddle.com</p>
            </div>
          </div>
          <div className="footer__nav">
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">What We Do</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Career</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="footer__social-profiles">
            <ul>
              <li>
                <a href="#">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaInstagram />
                </a>
              </li>
            </ul>
            <div className="footer__copyright">
              &copy; Copyright 2018 Huddle. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
